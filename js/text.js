var $text = (function () {
    var $box = $('#note');
    var $area = $('<div id="text" class="text"></div>');
    var $context = $('<textarea spellcheck="false"></textarea>');
  
    function init() {
      $area.css('height', window.innerHeight - 27);
      $area.append($context);
      $box.append($area);
    }
    function show(){
      $context.css('font-family', cfg.family);
      $context.css('font-size', cfg.size+'px');
      if (cfg.style == '斜体') {
        $context.css('font-style', 'italic');
        $context.css('font-weight','normal');
      } else if (cfg.style == '粗体') {
        $context.css('font-style','normal');
        $context.css('font-weight', 'bold');
      } else if (cfg.style == '粗偏斜体') {
        $context.css('font-style', 'italic');
        $context.css('font-weight', 'bold');
      }else{
        $context.css('font-style','normal');
        $context.css('font-weight','normal');
      }
    }
    $(window).resize(function(){
      $area.css('height', window.innerHeight - 27);
    });
  
    return {
      init: init,
      show: show
    };
  }());