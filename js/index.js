var cfg = {
    family: 'Arial',
    style: '常规',
    size: '16',
  };
  $(function () {
    $menu.init();
    $text.init();
    var $body = $('body');
    $body.click(function () {
      $menu.hideItems();
    });
  });