var range = function() {
  var arr = window.dancers;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof MakePulpDancer) {
      var top = parseFloat($(arr[i].$node).css("top").slice(0, -2));
      for (var j = 0; j < arr.length; j++) {
        var target = parseFloat($(arr[j].$node).css("top").slice(0, -2));
        if (!(arr[j] instanceof MakePulpDancer) && (((top + 150) > target) && ((top - 150) < target))) {
          var thisLeft = parseFloat($(arr[j].$node).css("left").slice(0, -2));
          var thisTop = parseFloat($(arr[j].$node).css("top").slice(0, -2));
          $(arr[j].$node).children("img").attr('src', "BackGround/smoke.gif");
          var blow = function() {
             $(this).remove();
          };
          setTimeout(blow.bind(arr[j].$node), 500);
        }
      }

    }

  }

}