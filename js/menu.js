var $menu = (function () {
    var $box = $('#note');
    var $bar = $('<div id="menu" class="menu"></div>');
  
    var data = [
      {
        title: '文件(F)',
        items: [
          {
            title: '新建',
          },
          {
            title: '打开',
          },
          {
            title: '保存',
          },
          {
            title: '另存',
          },
         
        ],
      },
      {
        title: '编辑(E)',
        items: [
          {
            title: '剪切',
          },
          {
            title: '复制',
          },
          {
            title: '粘贴',
          },
          {
            title: '删除',
          },
        ],
      },
      {
        title: '格式(O)',
        items: [
          {
            title: '字体',
          },
          {
            title: '标题',
          },
        ],
      },
      {
        title: '查看(V)',
        items: [
          {
            title: '类型',
          },
          {
            title: '文件',
          },
        ],
      },
      {
        title: '帮助(H)',
        items: [
          {
            title: '关于',
          },
          {
            title: '作者',
          },
        ],
      },
    ];
  
    var active = -1;
  
    function initTitle() {
      var $titles = $('<ul class="menu-title"></ul>');
  
      for (var i = 0; i < data.length; i++) {
        var $title = $('<li class="menu-title-items"></li>');
  
        $title.html(data[i].title);
        $title.attr('menu-title', i);
        $titles.append($title);
        $bar.append($titles);
  
        $title.click(function (e) {
          active = $(this).attr('menu-title');
          showItems();
          e.stopPropagation();
        });
  
        $title.hover(function () {
          if (active !== -1) {
            active = $(this).attr('menu-title');
            showItems();
          }
        });
      }
    }
  
    function initItems() {
      for (var i = 0; i < data.length; i++) {
        var items = '';
        for(var j = 0; j<data[i].items.length; j++){
          items += '<li class="menu-items-items" menu-items=' + i + '-' + j + '>' + data[i].items[j].title + '</li>';
        }
        var $items = $('<ul class="menu-items">' + items + '</ul>');
        $items.css('left', i * 69.5);
        $bar.append($items);
      }
      active = -1;
      $font.init();
      $bar.find('[menu-items=\'2-0\']').click(function(){
        $font.show();
      });
    }
  
    function showItems() {
      var $items = $('.menu-items');
      $items.css('display', 'none');
      if (active != -1) {
        $items.eq(active).css('display', 'inline-block');
      }
    }
  
    function hideItems() {
      active = -1;
      showItems();
    }
  
    function init() {
      initTitle();
      initItems();
      $box.append($bar);
    }
  
    return {
      init: init,
      hideItems: hideItems,
    };
  })();