(function () {
  (function(e) {
    var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
    !matches ? (e.matches = e.matchesSelector = function matches(selector) {
      var matchesElements = document.querySelectorAll(selector);
      var th = this;
      return Array.prototype.some.call(matchesElements, function(e) {
        return e === th;
      });
    }) : (e.matches = e.matchesSelector = matches);
  })(Element.prototype)

  var hasOwn = Object.prototype.hasOwnProperty

  function setProp (prop, value, target) {
    var ob = target || window
    if (!hasOwn.call(ob, prop)) {
      Object.defineProperty(ob, prop, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: value,
      })
    }
  }

  function replace (string, ob) {
    return string.replace(/{{([\w.]*)}}/g, function (str, key) {
      var keys = key.split('.')
      var v = ob[keys.shift()]

      for (var i in keys) {
        v = v[keys[i]]
      }
      return (typeof v !== 'undefined' && v !== null) ? v : ''
    })
  }

  function showMessageIn (container, inBegin) {
    function typeMapper (type) {
      return {
        error: 'danger',
        success: 'success',
      }[type]
    }

    return function showMessage (_, type, content) {
      var alertTemplate = (document.querySelector('#form-alert') || document.querySelector('#form__alert')).innerHTML
      var target = container || document.body

      target.insertAdjacentHTML(inBegin ? 'afterbegin' : 'beforeend', replace(alertTemplate, {
        type: typeMapper(type),
        text: Array.isArray(content) ? content.join('<br>') : content,
      }))
    }
  }

  function unique (len) {
    if (!len) len = 6

    return Math.random().toString(36).substr(2, len)
  }

  setProp('setProp', setProp)
  setProp('replace', replace)
  setProp('showMessageIn', showMessageIn)
  setProp('unique', unique)

  !!window.MediumEditor && !!$('.editor-init')[0] && new MediumEditor($('.editor-init')[0], {
    placeholder: false,
    imageDragging: false,
    toolbar: {
      buttons:[
        'bold',
        'italic',
        'underline',
        'orderedlist',
      ],
    },
  })
})()

$(document)
  .on('click', function () {
    $('.collapse').collapse('hide')
  })
  .on('click', '.play-video', function (event) {
    event.preventDefault();

    $(this).magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    }).magnificPopup('open')
  })
  .ready(function () {
    $('[data-toggle="tooltip"]').click(function () {
      $('[data-toggle="tooltip"]').tooltip('hide')
    })

    $('.js-example-basic-multiple').select2()

    $('[data-toggle="shadow"]').click(function () {
      $('.shadow-box').toggleClass('shadow')
      $('.shadow-inn').toggleClass('shadow1')
      $('#make-post').toggleClass('displayon').slideToggle()
      $('.button-box').toggleClass('displayoff')
      $('.i-display').toggleClass('displayon')
      $('.title-display').toggleClass('displayon')
    })

    $('[data-toggle="i-close"]').click(function () {
      $('.shadow-box').removeClass('shadow')
      $('.shadow-inn').removeClass('shadow1')
      $('#make-post').removeClass('displayon').slideToggle()
      $('.button-box').removeClass('displayoff')
      $('.i-display').removeClass('displayon')
      $('.title-display').removeClass('displayon')
    })

//Autor-menu
    if ($('ul').hasClass('profile-menu')) {
      $(document).ready(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 550) {
            $('#autor-menu').slideDown()
          }
          else {
            $('#autor-menu').fadeOut()
          }
        })
      })
    }


//Scroll to subscriptions
    $('#subscriptions-link').on('click', function (ev) {
      var offset = $('#subscriptions-block').offset();
      $('html,body').animate({
        scrollTop: offset.top - 85,
      }, 1200)
    })

//SlideToggle - Profile Settings
    $('[data-toggle="slide"]').click(function () {
      $('#profile-settings').slideToggle()
      $('.rotator').toggleClass('rotate90')
    })

//Tooltp - close icon X
    $('[data-toggle="tooltp"]').on({
      mouseenter: function () {
        $('.disoff-tooltp').removeClass('disoff-tooltp')
      },
      mouseleave: function () {
        $('.cap').toggleClass('disoff-tooltp')
      },
    })

    $('[data-toggle="tooltp1"]').on({
      mouseenter: function () {
        $('.disoff-tooltp1').removeClass('disoff-tooltp1')
      },
      mouseleave: function () {
        $('.cap1').toggleClass('disoff-tooltp1')
      },
    })

//09-Edit-Project.html
//Remove img to input on click on X
    function removePic (baseSelector) {
      var $el = $(baseSelector)
      var imageContainer = $el.find('.image')
      var input = $el.find('.form-control')
      var replacer = $('<input/>').attr({
        type: 'hidden',
        name: [baseSelector.replace('.', ''), 'deleted'].join('_'),
        value: 'Y',
      })

      return function () {
        imageContainer.replaceWith(replacer)
        input.height('unset')
      }
    }

    $('.avatar__btn-delete').on('click', removePic('.avatar'))
    $('.project-img__btn-delete').on('click', removePic('.project'))

    function findVideos () {
      let videos = document.querySelectorAll('.about-project__video')

      if (!videos.length) return

      [].slice.call(videos).map(setupVideo)
    }

    function setupVideo (video) {
      var link = video.querySelector('.about-project__video-link')
      var media = video.querySelector('.about-project__video-media')
      var button = video.querySelector('.about-project__video-button')
      var id = parseMediaURL(media)
      var dimensions = {
        width: video.clientWidth,
        height: video.clientHeight,
      }

      function clickHandler () {
        var iframe = createIframe(id, dimensions);

        [link, button].map(function (el) {
          video.removeChild(el)
        })

        video.appendChild(iframe)
        video.classList.add('about-project__video_playing')
      }

      video.addEventListener('click', clickHandler)

      link.removeAttribute('href')
      video.classList.add('about-project__video_enabled')
    }

    function parseMediaURL (resource) {
      var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/sddefault\.jpg/i
      var url = resource.src
      var match = url.match(regexp)

      return match[1]
    }

    function createIframe (id, dimension) {
      var iframe = document.createElement('iframe')

      iframe.setAttribute('width', dimension.width)
      iframe.setAttribute('height', dimension.height)
      iframe.setAttribute('allowfullscreen', '')
      iframe.setAttribute('allow', 'autoplay')
      iframe.setAttribute('src', generateURL(id))
      iframe.classList.add('about-project__video-media')

      return iframe
    }

    function generateURL (id) {
      return window.replace('https://www.youtube.com/embed/{{id}}{{query}}', {
        id: id,
        query: '?rel=0&showinfo=0&autoplay=1',
      })
    }

    findVideos()

    // Parser container
    function isParserUrlValid(url) {
      return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
    }

    function getParserParam(e) {
      return {
        target: e.target,
        url: e.target.getAttribute('data-parser'),
        type: e.target.getAttribute('name'),
        value: '',
      }
    }
    function sendParserUrl(input, url, type, value) {
      $.ajax({
          url: url,
          type: "post",
          data: { type: type, value: value },
          success: function (data) {
            var parent = input.closest('.parser-container')
            parent.classList.add('success')
          },
          error: function(jqXHR, textStatus, errorThrown) {
             console.log(textStatus, errorThrown)
          }
      })
    }
    $(".parser-input").on("focus", function(){
      $(this).removeClass('is-invalid')
    })
    $(".parser-input").on("change paste", function(input){
      var param = getParserParam(input)
      console.log(param.target);
      param.value = input.type === 'paste'
                    ? input.originalEvent.clipboardData.getData('text')
                    : input.target.value

      isParserUrlValid(param.value)
          ? sendParserUrl(input.target, param.url, param.type, param.value)
          : $(this).addClass('is-invalid')
      var parent = param.target.closest('.parser-container')
      parent.classList.remove('success')

    })


  })
