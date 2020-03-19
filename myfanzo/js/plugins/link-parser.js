(function ($) {
  var domains = {
    youtube: ['youtube.com', 'youtu.be'],
    rutube: 'rutube.ru',
    vimeo: 'vimeo.com',
    soundcloud: 'soundcloud.com'
  }

  function getUrlData (string) {
    try {
      return new URL(string)
    }
    catch (error) {
      throw error
    }
  }

  $(document).on('change', 'input[data-parse-link]', function () {
    var $target = $(this)
    var $val = $target.val()

    if ($target.attr('type') !== 'url') return

    var $urlData = getUrlData($val)

    $target.trigger('linkParser.change', null)
  })
})(jQuery)
