var range = function() {
  var arr = window.dancers;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof MakePulpDancer) {
      var top = parseFloat($(arr[i].$node).css("top").slice(0, -2));
      var left = parseFloat($(arr[i].$node).css("left").slice(0, -2));
      for (var j = 0; j < arr.length; j++) {
        var targetT = parseFloat($(arr[j].$node).css("top").slice(0, -2));
        var targetL = parseFloat($(arr[j].$node).css("left").slice(0, -2));
        if (!(arr[j] instanceof MakePulpDancer) &&
          (((top + 50) > targetT) && ((top - 50) < targetT)) &&
          (((left + 50) > targetL) && ((left - 50) < targetL))) {
          $(arr[j].$node).children("img").attr('src', "BackGround/smoke.gif");
          var blow = function() {
             $(this).remove();
          };
          setTimeout(blow.bind(arr[j].$node), 1000);
        }
      }

    }

  }

}