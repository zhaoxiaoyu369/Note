var $font = (function () {
    var $dlg = $(
      '' +
          '<div  id="font" class="font">' +
          '<div class="fontbox">' +
          '<div class="fonttitle">' +
          '<p class="fonttitle-text">字体</p>' +
          '<span class="fonttitle-closebtn" title="关闭">✖</span>' +
          '</div>' +
          '<div class="fontmain">' +
          '<div class="fontmain-family"><p>字体(F):</p></div>' +
          '<div class="fontmain-style"><p>字形(Y):</p></div>' +
          '<div class="fontmain-size"><p>大小(S):</p></div>' +
          '<fieldset class="fontmain-sample">' +
          '<legend>示例</legend>' +
          '<p class="fontmain-sample-txt">AaBbYyZz</p>' +
          '</fieldset>' +
          '<div class="fontmain-script">' +
          '<label>' +
          '<span>脚本(R):</span>' +
          '<select>' +
          '<option value="西欧语言">西欧语言</option>' +
          '<option value="中文 GB2312">中文 GB2312</option>' +
          '</select>' +
          '</label>' +
          '</div>' +
          '</div>' +
          '<div class="fontfoot">' +
          '<input class="fontfoot-ok" type="button" value="确定">' +
          '<input class="fontfoot-cancel" type="button" value="取消">' +
          '</div>' +
          '</div>' +
          '</div>'
    );
  
    var $closebtn = $dlg.find('.fonttitle-closebtn');
    var $cancel = $dlg.find('.fontfoot-cancel');
    var $okbtn = $dlg.find('.fontfoot-ok');
    var $family = $dlg.find('.fontmain-family');
    var $style = $dlg.find('.fontmain-style');
    var $size = $dlg.find('.fontmain-size');
    var $sample = $dlg.find('.fontmain-sample-txt');
  
    var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
    var styles = ['常规', '斜体', '粗体', '粗偏斜体'];
    var sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
      
    var config={};
  
    function initfamily(arr, $list) {
      for (var i = 0; i < arr.length; i++) {
        var $item = $('<li class="fontmain-list-item"></li');
        $item.css('font-family', arr[i]);
        if(arr[i]==cfg.family){
          $item.addClass('use');
        }
        $item.html(arr[i]);
        $list.append($item);
        $item.click(function(){
          $('div.fontmain-family .fontmain-list-item').removeClass('use');
          $(this).addClass('use');
          cfg.family=$(this).html();
          showtitle();
          showsample();
        });
      }
    }
    function initstyles(arr, $list) {
      for (var i = 0; i < arr.length; i++) {
        var $item = $('<li class="fontmain-list-item"></li');
        $item.html(arr[i]);
        if (arr[i] == '斜体') {
          $item.css('font-style', 'italic');
        } else if (arr[i] == '粗体') {
          $item.css('font-weight', 'bold');
        } else if (arr[i] == '粗偏斜体') {
          $item.css('font-style', 'italic');
          $item.css('font-weight', 'bold');
        }
        if(arr[i]==cfg.style){
          $item.addClass('use');
        }
        $list.append($item);
        $item.click(function(){
          $('div.fontmain-style .fontmain-list-item').removeClass('use');
          $(this).addClass('use');
          cfg.style=$(this).html();
          showtitle();
          showsample();
        });
      }
    }
    function initsize(arr, $list) {
      for (var i = 0; i < arr.length; i++) {
        var $item = $('<li class="fontmain-list-item"></li');
        if(arr[i]==cfg.size){
          $item.addClass('use');
        }
        $item.html(arr[i]);
        $list.append($item);
        $item.click(function(){
          $('div.fontmain-size .fontmain-list-item').removeClass('use');
          $(this).addClass('use');
          cfg.size=$(this).html();
          showtitle();
          showsample();
        });
      }
    }
    function initlist(arr, $box) {
      var $list = $('<ul class="fontmain-list"></ul>');
      var $title = $('<input class="fontmain-list-title" type="text">');
      var $choice = $('<div class="fontmain-box"></div>');
      var boxclass = $box.attr('class');
      if (boxclass == 'fontmain-family') {
        initfamily(arr, $list);
      } else if (boxclass == 'fontmain-style') {
        initstyles(arr, $list);
      } else {
        initsize(arr, $list);
      }
      $choice.append($title);
      $choice.append($list);
      $box.append($choice);
    }
    function init() {
      config=cfg;
      $('#note').append($dlg);
      initlist(fonts, $family);
      initlist(styles, $style);
      initlist(sizes, $size);
      showtitle();
      showsample();
    }
  
    function showtitle(){
      $('div.fontmain-family input').val(config.family);
      $('div.fontmain-style input').val(config.style);
      $('div.fontmain-size input').val(config.size);
    }
    function showsample(){
      $sample.css('font-family', config.family);
      $sample.css('font-size', config.size+'px');
      if (config.style == '斜体') {
        $sample.css('font-style', 'italic');
        $sample.css('font-weight','normal');
      } else if (config.style == '粗体') {
        $sample.css('font-style','normal');
        $sample.css('font-weight', 'bold');
      } else if (config.style == '粗偏斜体') {
        $sample.css('font-style', 'italic');
        $sample.css('font-weight', 'bold');
      }else{
        $sample.css('font-style','normal');
        $sample.css('font-weight','normal');
      }
    }
  
    function close() {
      $dlg.css('display', 'none');
    }
    $closebtn.click(function () {
      close();
    });
    $cancel.click(function () {
      close();
    });
  
    $okbtn.click(function(){
      $.extend(cfg,config);
      $text.show();
      close();
    });
  
    function show() {
      $dlg.css('display', 'block');
    }
  
    $dlg.click(function (e) {
      e.stopPropagation();
    });
  
    return {
      init: init,
      show: show,
    };
  })();