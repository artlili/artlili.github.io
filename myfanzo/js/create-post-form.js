(function ($) {
  var $document = $(document)
  var toString = Object.prototype.toString
  var replaceString = window.replace
  var showFormAlert = window.showMessageIn

  $(document).ajaxSuccess(function (_, xhr) {
    const responseJSON = {
      success: true,
      data: xhr.responseJSON,
    }
    const responseText = JSON.stringify(responseJSON)

    return {
      ...xhr,
      responseJSON,
      responseText,
    }
  })

  function keys (ob) {
    return ob && Object.keys(ob)
  }

  function values (ob) {
    return keys(ob).map(function (key) {
      return ob[key]
    })
  }

  function isFileList (value) {
    return toString.call(value) === '[object FileList]'
  }

  function isFile (value) {
    return toString.call(value) === '[object File]'
  }

  function isFormData (value) {
    return (typeof FormData !== 'undefined' && value instanceof FormData)
  }

  function isDomNode (value) {
    return value instanceof Node
  }

  function isFormNode (value) {
    return (isDomNode(value) && toString.call(value) === '[object HTMLFormElement]')
  }

  function unique (len) {
    if (!len) len = 6

    return Math.random().toString(36).substr(2, len)
  }

  function convertValue (size) {
    var i = Math.ceil(Math.floor(Math.log(size) / Math.log(1024)))

    return Math.round((size / Math.pow(1024, i))) + ' ' + ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][i]
  }

  var makePostForm = $('form#make-post')
  var MAKE_POST_URL = makePostForm.data('action')
  var sessionFiles = {}

  function setFileTo (target) {
    return function (file) {
      if (isFile(file)) {
        target.append('file', file, file.name)
      }
    }
  }

  /**
   * @param url {String}
   * @param error {Function}
   * @param success {Function}
   */
  function getSendRequest (url, error, success) {
    return function provideRequest (action, data) {
      var formData

      if (isFormData(data)) {
        formData = data
      }
      else {
        formData = new FormData()
      }

      formData.append('action', action)

      if (isFileList(data)) {
        [].slice.call(data).forEach(setFileTo(formData))
      }
      else if (keys(sessionFiles).length) {
        values(sessionFiles).forEach(setFileTo(formData))
      }

      return $.ajax({
        url: url,
        method: 'POST',
        success: success || null,
        error: error || success || null,
        data: formData,
        processData: false,
        contentType: false,
      })
    }
  }

  function getPost (postId, success, error) {
    return $.ajax({
      url: 'http://localhost:3000/posts/' + postId,
      success: success,
      error: error,
    })
  }

  var showUploadMessage = showFormAlert(document.querySelector('.update-header-photo .modal-body'), true)
  var showPublishErrorMessage = showFormAlert(document.querySelector('.alert-placement'), true)

  function checkSucceededUpload (response) {
    if (response.error) {
      showUploadMessage(null, 'error', response.error)
      throw response.error
    }
    else if (response.tmpImg) {
      var fileId = unique()
      var sentFile = this.data.get('file')

      if (sentFile) {
        sessionFiles[fileId] = this.data.get('file')
        $('body').trigger('file.appended', {
          key: fileId,
          url: response.tmpImg,
        })
      }
    }
  }

  function checkSucceededCreate (response) {
    if (response.error) {
      showPublishErrorMessage(null, 'error', response.error)
      throw response.error
    }
    else if (response['success-added-post']) {
      window.location.reload()
    }
  }

  var uploadPhotos = getSendRequest('/', showUploadMessage, checkSucceededUpload)
  var submitForm = getSendRequest(MAKE_POST_URL, showPublishErrorMessage, checkSucceededCreate)

  function findClosestForm (el) {
    return $(el).closest('form')
  }

  function renderAttachmentList (data, form, field) {
    $.each(data, function (index) {
      var input = field.clone(true)
      var item = data[index]
      if (!item) return

      if (!input.val() && item.id) {
        input.val(item.id)
      }

      var $attach = $(replaceString($('#form__attachment').html(), {
        fileName: item.name,
        value: convertValue(item.size),
      }))
        .append(input)
        .on('click', '.btn', function (event) {
          event.preventDefault()
          $(this).closest('.attachment-list__item').remove()
        })

      form.find('.attachment-list').append($attach)
    })
  }

  function appendAttachment (fileList, node) {
    var input = $(node).clone(true).attr('name', 'attachment').addClass('sr-only')
    var form = findClosestForm(node)
    var list = [].slice.call(fileList)

    renderAttachmentList(list, form, input)
  }

  function renderSingleContentElement (data, target, type) {
    var template = {
      image: $('template#form__image').html(),
      video: $('template#form__video').html(),
    }
    target.html(replaceString(template[type], data))
  }

  /**
   * Render successfully uploaded images from upload modal
   * @params event {Event} - will be ignored
   * @params files {Object[]}
   * @return void
   */
  function setImages () {
    var urls = arguments.length > 1 ? [].slice.call(arguments, 1, arguments.length) : null

    if (!urls) return

    var container = $('#make-post .images-list')

    urls.map(function (ob) {
      renderSingleContentElement({
        source: ob.url,
        value: ob.key,
      }, container, 'image')
    })
  }

  function initPluginsInForm (form, isAppendedForm, data) {
    form.find('.file-attachment').fileUploader({
      onChange: appendAttachment,
    })

    form.find('.upload-photo-item__input').fileUploader({
      onChange: function (files) {
        uploadPhotos('tmpImg', files)
      },
    })

    function removeForm () {
      if (!isAppendedForm) return

      var wrapper = form.closest('div.ui-block')

      wrapper
        .removeClass('shadow-inn shadow1')

      wrapper
        .find('article.post')
        .slideDown(500)

      wrapper
        .find('div.comments')
        .slideDown(500)

      form.slideUp(500).remove()
      $('.shadow-box').removeClass('shadow')

      Element.prototype.scrollIntoView && wrapper[0].scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }

    form.on({
      submit: function (event) {
        event.preventDefault()

        // can be used with ajax chains like done() | fail(), ex. append new post in feed
        submitForm('save', new FormData(form[0])).done(removeForm)

      },
      reset: removeForm,
    })
      .on('click', 'i-display', removeForm)

    // init selects
    if (isAppendedForm) {
      if (data.tags && data.tags.length) {
        var $tagsSelect = form.find('.selectblog[multiple]')
        var opts = data.tags.map(function (tag) {
          return $('<option />')
            .val(tag.id)
            .text(tag.name)
            .attr('selected', true)
            .data('content', '<span class="badge badge-secondary">'+ tag.name +'</span>')
        })
        var tagIds = data.tags.map(function (tag) {
          return tag.id
        })

        $tagsSelect
          .append(opts)
          .selectblog()
          .selectblog('val', tagIds)
      }

      form.find('.selectblog:not(multiple)')
        .selectblog()
        .selectblog('val', data.subscription.type)

      new MediumEditor(form.find('.editor-init')[0], {
        placeholder: false,
        toolbar: {
          buttons: [
            'bold',
            'italic',
            'underline',
            'orderedlist',
          ],
        },
      }).setContent(data.body)
    }
  }

  function setTagsToSelect (data, el) {

  }

  function renderAdditionData (data, key, form) {
    var MAP = {
      attachments: '.attachment-list',
      image: '.images-list',
      video: '.videos-list',
    }

    var el = $(form).find(MAP[key])

    if (!el[0]) {
      return
    }

    var getRenderFn = function (key) {
      return {
        attachments: renderAttachmentList,
        tags: function (data) {

        },
        image: function (data) {
          renderSingleContentElement({
            source: data.url,
            value: data.name,
          }, el, key)
        },
        video: function (data) {
          renderSingleContentElement(data, el, key)
        },
      }[key]
    }

    getRenderFn(key)(data, form, $('<input type="hidden" name="attachment" />'))
  }

  function fillFormTemplate (wrapper) {
    return function (data) {
      var formTemplate = $('template#make-post__template').html()
      var formWrapper = $('template#make-post__form_wrapper').html()

      if (!formTemplate.length) return

      var $form = $(replaceString(formWrapper, {
        formContent: replaceString(formTemplate),
      }))

      wrapper.append($form).slideDown(500)
      initPluginsInForm($form, true, data)

      $.each(data, function (key) {
        var item = data[key]
        var $element = $form.find('[name="' + key + '"]')

        if (['number', 'string'].includes(typeof item)) {
          $element
            .val(item)
            .parent('.form-group')
            .attr('class', function (_, className) {
              return className.replace(/is-\w+/, '')
            })
        }
        else {
          renderAdditionData(item, key, $form)
        }
      })
    }
  }

  $document
    .on('file.appended', setImages)
    .on('click', '.image-list__item-remove', function (event) {
      event.preventDefault()

      var removeElement = $(this).parent()
      var id = removeElement.data('id')

      removeElement.remove()

      delete sessionFiles[id]
    })
    .on('click', 'a[data-action="edit"]', function (event) {
      event.preventDefault()

      var wrapper = $(this).closest('div.ui-block')
      var postId = wrapper.data('id')

      function error (error) {}

      getPost(postId, fillFormTemplate(wrapper), error)
        .done(function () {
          wrapper.find('article.post').slideUp(500)
          wrapper.find('div.comments').slideUp(500)

          wrapper.addClass('shadow-inn shadow1')

          $('.shadow-box').addClass('shadow')
        })

    })
    .on('shown.bs.select', function (event) {
      var select = $(event.target)

      if (select.attr('multiple')) {
        console.log('multiple')
      }
    })
    .ready(function () {
      initPluginsInForm(makePostForm)

      var target = $('#make-post').html()
      $(target).wrap('<form>')
      $('<template id="make-post__template"></template>').html(target).appendTo($('body'))
    })

}(jQuery))
