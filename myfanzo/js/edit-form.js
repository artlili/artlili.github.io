(function ($) {
  var replace = window.replace

  var storedFiles = {}

  var template = {
    modal: function () {
      return $('#cropper__modal').html()
    },
    preview: function () {
      return $('#image-preview').html()
    }
  }

  function getControls (el) {
    return {
      form: function () {
        return $(el).find('form')
      }
    }
  }

  var removeModal = function (modal) {
    modal.remove()
  }

  function initCropper (modal, params) {
    function closeModal (message) {
      modal.modal('hide')
      removeModal(modal)
      throw message
    }

    var aspectRatio
    var ratioParam = params.aspectRatio
    var isNotFloat = typeof ratioParam === 'string' && !(/[.,]/.test(ratioParam))

    if (isNotFloat) {
      var matched = ratioParam.match(/(\d+)+/g)

      if (!matched) {
        closeModal('Aspect Ratio param must be a number or math expression')
      }
      if (matched.length >= 2) {
        aspectRatio = matched[0] / matched[1]
      } else {
        aspectRatio = parseFloat(matched[0])
      }
    } else {
      aspectRatio = parseFloat(ratioParam)
    }

    if (typeof aspectRatio !== 'number') {
      closeModal('Aspect Ratio param must be a number or math expression, but got ' + typeof params.aspectRatio)
    }

    return new Cropper(modal.find('img')[0], Object.assign(params, {
      aspectRatio: aspectRatio || 16 / 9,
      viewMode: 3,
      rotatable: false,
      scalable: false,
      zoomable: false,
      zoomOnTouch: false,
      zoomOnWheel: false
    }))
  }

  function showModal (src) {
    var modalTemplate = replace(template.modal(), {
      src: src
    })

    var $modal = $(modalTemplate)

    $modal.modal('show')

    return $modal
  }

  function getStorageDataInput (name, value, type) {
    return $('<input />').attr({
      name: name,
      type: type || 'hidden',
      value: value
    })
  }

  function initUploaders (container) {
    $('.file-attachment.single').each(function () {
      var baseInput = $(this)
      var $imgContainer = container || baseInput.closest('.form-group').find('.caption-inner')

      $(this).fileUploader({
        onChange: function (files, node) {
          var input = $(node).clone(true).addClass('sr-only')
          var params = input.data()
          var file = files[0]
          var sessionLink = URL.createObjectURL(file)
          var modal = showModal(sessionLink)
          var cropInstance

          modal
            .on('shown.bs.modal', function () {
              cropInstance = initCropper(modal, params)
            })
            .on('hidden.bs.modal', function () {
              removeModal(modal)
            })

          var form = getControls(modal).form()

          form
            .on({
              submit: function (event) {
                event.preventDefault()
                console.log(cropInstance.getCanvasData(), cropInstance.getData(true), cropInstance.getImageData())
                var cropData = cropInstance.getData(true)
                var croppedFileSessionLink = cropInstance.getCroppedCanvas().toDataURL(file.type)

                $imgContainer.html($(replace(template.preview(), {
                  src: croppedFileSessionLink,
                  name: file.name
                })).addClass('float-left'))
                  .append(input.attr('name', params.fieldName))
                  .find('button.project-img__btn-delete')
                  .tooltip()
                  .on('click', function () {
                    $(this).tooltip('dispose')
                  })

                $.each(cropData, function (key) {
                  $imgContainer.append(
                    getStorageDataInput([params.fieldName, key].join('.'), cropData[key])
                  )
                })

                modal.modal('hide')
              },
              reset: function () {
                modal.modal('hide')
              }
            })
        }
      })
    })
  }

  function getReplacedInput(name, value) {
    var fieldName = value ? [name, 'delete[' + value + ']'].join('_') : [name, 'delete'].join('_')
    return getStorageDataInput(fieldName, true)
  }

  function removeImageHandler (event) {
    event.preventDefault()
    var $wrapper = $(this).closest('.form-group')
    var $input = $wrapper.find('input[type="file"]')
    var $imgContainer = $wrapper.find('.caption-inner')
    var params = $input.data()
    var isMultipleInput = $input.attr('multiple')

    if (!isMultipleInput) {
      $imgContainer.html(getReplacedInput(params.fieldName))
    }
    else {
      var removeElement = $(this).closest('div.gallery__img')
      var removeId = removeElement.data('id')

      if (storedFiles[removeId]) {
        delete storedFiles[removeId]
        removeElement.remove()
      } else {
        removeElement.replaceWith(getReplacedInput('gallery', removeId))
      }
    }
  }

  function handleRemoveExistingPicture() {
    $(document).on('click', 'button.project-img__btn-delete', removeImageHandler)
  }

  function initGalleryUploader () {
    $('.file-attachment.gallery').fileUploader({
      onChange: function (files) {
        var fileList = [].slice.call(files)
        var $imgContainer = $(this).closest('.form-group').find('.caption-inner')

        $.each(fileList, function (index) {
          var file = fileList[index]
          var identifier = window.unique()

          storedFiles[identifier] = file
          var preview = $(replace(template.preview(), {
            src: URL.createObjectURL(file),
            name: file.name
          }))


          $imgContainer.append(preview)

          preview
            .addClass('gallery__img')
            .attr('data-id', identifier)
            .find('button.project-img__btn-delete')
            .tooltip()
            .on('click', function () {
              $(this).tooltip('dispose')
            })
        })
      }
    })
  }

  function handleFormSubmit (event) {
    event.preventDefault()
    var form = $(this)[0]
    var data = new FormData(form)
    var lastImageFromServer = $('.gallery__img').filter(function () {
      return this.getAttribute('data-id').match(/^\d+$/)
    }).last()

    var lastImageId = lastImageFromServer.length ? +lastImageFromServer.data('id') : 0

    if (Object.keys(storedFiles).length) {

      $.each(storedFiles, function (key) {
        var file = storedFiles[key];
        data.append('gallery[' + (++lastImageId) + ']', file, file.name)
      })
    }

    $.ajax({
      data: data,
      method: form.method,
      contentType: form.enctype,
      processData: false,
      success: function () {
        window.location.reload()
      }
    })
  }

  $(document).ready(function () {
    handleRemoveExistingPicture()
    initUploaders()
    initGalleryUploader()

    $('form.edit-form').submit(handleFormSubmit)

    $(document).on('mouseup', '.with-focus', function (event) {
      var $target = $(event.target)
      var $control = $(this).find('input[type="file"]')

      if ($target.closest('.image-list__item').length) {
        event.preventDefault()
        return false
      }

      $control[0].click()
      event.stopPropagation()
    })
  })
})(jQuery)
