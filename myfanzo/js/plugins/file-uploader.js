"use strict";

(function ($) {
  function setListenerFor(node) {
    return function (listener) {
      if (node.attr('type') !== 'file') return;
      $(node).on('change', function (event) {
        event.preventDefault()

        var files = event.target.files

        if (!files.length) return

        listener.call(this, files, node)
        node.val(null)
      });
    };
  };

  var FileUploader = function FileUploader(target, props) {
    var setListener = setListenerFor(target)
    props.onChange && setListener(props.onChange)

    return target
  };

  $.fn.fileUploader = function (props) {
    FileUploader(this, props)

    return $(this)
  };
})(jQuery);
