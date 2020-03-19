(function ($) {
  var replace = function replace () {
    return window.replace.apply({}, arguments)
  }

  var showMessageIn = function () {
    return window.showMessageIn.apply({}, arguments)
  }

  var TEMPLATES = {
    commonForm: 'commonForm',
    simpleForm: 'simpleForm',
    removeForm: 'removeForm',
    record: 'record',
    modal: 'modal',
    simpleControls: 'simpleControls',
    extendControls: 'extendControls',
    price: 'price',
    formAlerts: 'formAlerts',
    imageView: 'imageView'
  }

  var SELECTORS = {
    edit: 'button.subscribes__edit',
    remove: 'button.subscribes__remove',
    create: 'button.subscribes__create',
    record: 'li.subscribes__item',
    instance: '.subscribes',
    select: 'select.selectblog',
    alerts: 'div.alerts',
    image: 'input.file-attachment',
    imageView: 'div.subscribes__image-preview',
    template: {
      [TEMPLATES.commonForm]: 'template#subscribe__create-form',
      [TEMPLATES.simpleForm]: 'template#subscribes__simple-form',
      [TEMPLATES.removeForm]: 'template#subscribes__remove-form',
      [TEMPLATES.record]: 'template#subscribes__record',
      [TEMPLATES.modal]: 'template#subscribes__modal',
      [TEMPLATES.simpleControls]: 'template#subscribes__record-controls_simple',
      [TEMPLATES.extendControls]: 'template#subscribes__record-controls_extend',
      [TEMPLATES.price]: 'template#subscribes__record-price',
      [TEMPLATES.formAlerts]: 'template#form__alert',
      [TEMPLATES.imageView]: 'template#form__image'
    },
  }

  var EVENT_TYPE = {
    click: 'click',
    submit: 'submit',
    reset: 'reset',
  }

  function isFile(value) {
    return toString.call(value) === '[object File]'
  }

  function requestProvider (data, success, error) {
    var destination = [location.protocol + '//', location.host, location.pathname].join('')
    return $.ajax({
      async: false,
      url: destination,
      data: data,
      method: 'POST',
      processData: false,
      contentType: false,
      success: success || null,
      error: error || success,
    })
  }

  function getHTML (target) {
    return target ? $(target).html() : ''
  }

  function getTemplate (name) {
    return getHTML(SELECTORS.template[name])
  }

  function getControls (target) {
    var el = $(target)

    return ({
      record: function () {
        return el
      },
      form: function () {
        return el.find('form')
      },
      select: function () {
        return el.find(SELECTORS.select)
      },
      alertPlace: function () {
        return this.form().find(SELECTORS.alerts)
      },
      imageAppend: function () {
        return this.form().find(SELECTORS.image)
      },
      imageViewer: function () {
        return this.form().find(SELECTORS.imageView)
      }
    })
  }

  function getRecord (from) {
    return $(from).closest(SELECTORS.record)
  }

  function getSelectValueText (modal) {
    var select = getControls(modal).select()
    return select.find('option[value='+ select.selectblog('val') +']').text()
  }

  function preventEvent (callback) {
    return function handler (event) {
      event.preventDefault()
      callback.call(this, event)
    }
  }

  function appendExistingImage (imageSource, onClick) {
    var src = isFile(imageSource) ? URL.createObjectURL(imageSource) : imageSource

    return function (container) {
      var template = getTemplate(TEMPLATES.imageView)

      var image = $(replace(
        template, {
          source: src
        }))
        .on(EVENT_TYPE.click, 'button.btn', onClick)

      container.append(image)

      return image
    }
  }

  function showModal (type, data, onSubmit, onReset) {
    if (typeof onSubmit !== 'function') throw 'onSubmit must be passed as function'

    var titles = {
      commonForm: !data ? 'Создание подписки' : 'Редактирование подписки',
      simpleForm: 'Редактирование подписки',
      removeForm: 'Удаление подписки',
    }
    var formContent = replace(
      getTemplate(type),
      Object.assign(
        data || {},
        {
          action: !data ? 'create-subscription' : 'update-subscription',
        },
      ),
    )
    var template = replace(getTemplate(TEMPLATES.modal), {
      title: titles[type],
      formContent: formContent,
    })
    var $modal = $(template)
    var stop = false
    var elements = getControls($modal)

    if (type === TEMPLATES.removeForm) {
      var $select = elements.select()

      function notCurrentSubscribe (subscribe) {
        return subscribe.title !== data.title
      }

      function createOptionNode (subscribe) {
        return $select.append($('<option value="' + subscribe.id + '">' + subscribe.title + '</option>'));
      }

      $.each(removeSelectSubscribes, function () {
        notCurrentSubscribe(this) && createOptionNode(this)
      })

      $select.selectblog('refresh')
    }

    function preventSubmitting () {
      stop = true
    }

    $(document.body).append($modal)

    $.each(data, function (key) {
      var $element =  elements.form().find('[name=' + key + ']')

      if (['cost', 'image'].includes(key)) $element.attr('disabled', true)

      if (key === 'image') {
        appendExistingImage(data[key], function(event) {
          $element.attr('disabled', false)
          elements.imageViewer().html('')
        })(elements.imageViewer())
      }

      $element.parent('.form-group')
        .attr('class', function (_, className) {
          return className.replace(/is-\w+/, '')
        })
    })

    var removeModal = function () {
      $modal.remove()
    }

    elements.select().selectblog()

    $modal
      .modal('show')
      .on('hidden.bs.modal', removeModal)

    var form = elements.form()

    elements.imageAppend().fileUploader({
      onChange: function (files, node) {
        var $node = $(node)
        var input = node.clone(true).attr('name', 'image').addClass('sr-only')
        var file = [].slice.call(files)[0]
        var container = elements.imageViewer()

        $node.attr('disabled', true)

        if (!file) return

        appendExistingImage(file, function (event) {
          event.preventDefault()
          $node.removeAttr('disabled')
          elements.imageViewer().html('')
        })(container)
          .append(input)
      }
    })


    form
      .on({
        submit: preventEvent(function () {
          var data = new FormData(form[0])
          data.append('action', form.data('action'))

          onSubmit(data, preventSubmitting)

          !stop && $modal.modal('hide')
          stop = false
        }),
        reset: preventEvent(function () {
          onReset && onReset()
          $modal.modal('hide')
          stop = false
        }),
      })

    return $modal;
  }

  function getSubscribeData (record, callback) {
    var data = new FormData()
    data.append('id', record.data('id'))
    data.append('action', 'read-subscription')

    requestProvider(data, callback)
  }

  function initUpdateForm (target, res, extended) {
    var formTemplateName = extended ? TEMPLATES.commonForm : TEMPLATES.simpleForm
    var controlsTemplateName = extended ? TEMPLATES.extendControls : TEMPLATES.simpleControls
    var elements = getControls(target)
    var $modal

    var showErrors = function (errors) {
      var controls = getControls($modal)
      var alerts = controls.alertPlace()
      showMessageIn(alerts[0], true)(null, 'error', errors)
    }

    function submit (data, preventSubmitting) {
      function error (error) {
        preventSubmitting()

        showErrors(error)
      }

      function success (response) {
        if (!response.success) {
          preventSubmitting()
          error(response.errors)

          return
        }

        var d = response.data
        var data = {
          controls: replace(getTemplate(controlsTemplateName)),
          price: extended ? replace(getTemplate(TEMPLATES.price), {
            cost: d.cost,
            currency: getSelectValueText($modal),
          }) : ''
        }

        replaceUpdatedSubscribe(Object.assign(data, d), elements.record())
      }

      requestProvider(data, success, error)
    }

    $modal = showModal(formTemplateName, res.data || {}, submit)
  }

  function editExistSubscribe () {
    var isExtended = !!$(this).data('extend')
    var record = getRecord($(this))

    function success (response) {
      initUpdateForm(record, response, isExtended)
    }

    getSubscribeData(record, success)
  }

  function createSubscribe () {
    var $this = $(this)
    var $record = getRecord($this)
    var $modal

    var showErrors = function (errors) {
      var controls = getControls($modal)
      var alerts = controls.alertPlace()
      showMessageIn(alerts[0], true)(null, 'error', errors)
    }

    function submit (data, preventSubmitting) {
      function error (error) {
        preventSubmitting()
        var e = error.errors || error

        showErrors(e)
      }

      function success (response) {
        if (!response.success) {
          preventSubmitting()
          error(response.errors)

          return
        }

        var d = response.data
        var data = {
          controls: replace(getTemplate(TEMPLATES.extendControls)),
          price: replace(getTemplate(TEMPLATES.price), {
            cost: d.cost,
            currency: getSelectValueText($modal),
          })
        }

        appendNewSubscribe(Object.assign(data, d), $record)
        removeSelectSubscribes.push(response.data)
      }

      requestProvider(data, success)
    }

    $modal = showModal(TEMPLATES.commonForm, null, submit)
  }

  function replaceUpdatedSubscribe (data, record) {
    $(record).replaceWith(replace(getTemplate('record'), data))
  }

  function appendNewSubscribe (data, record) {
    $(replace(getTemplate('record'), data)).insertBefore(record)
  }

  function removeSubscribe () {
    var $this = $(this)
    var record = getRecord($this)

    function submit (data) {
      function success () {
        record.remove()
      }

      requestProvider(data, success)
    }

    getSubscribeData(record, function (response) {
      var res = response
      if (res.success) {
        showModal(TEMPLATES.removeForm, res.data, submit)
      } else {
        // showError
      }
    })
  }

  function subscribes () {
    var instances = $(SELECTORS.instance)
    if (!instances.length) return

    instances
      .on(EVENT_TYPE.click, SELECTORS.edit, editExistSubscribe)
      .on(EVENT_TYPE.click, SELECTORS.create, createSubscribe)
      .on(EVENT_TYPE.click, SELECTORS.remove, removeSubscribe)
  }

  $(document).ready(subscribes)
})(jQuery)
