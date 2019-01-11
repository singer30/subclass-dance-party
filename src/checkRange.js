var range = function() {
  var arr = window.dancers;
  // console.log('range')
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    count++;
    // console.log(count)
    if (arr[i] instanceof MakePulpDancer) {
      // console.log('bender first loop ')
      //var left = parseFloat($(arr[i].$node).css("left").slice(0, -2));
      var top = parseFloat($(arr[i].$node).css("top").slice(0, -2));
      for (var j = 0; j < arr.length; j++) {
        // console.log('luke second loop')
        var target = parseFloat($(arr[j].$node).css("top").slice(0, -2));
      // console.log('alexei')
        if (!(arr[j] instanceof MakePulpDancer) && (((top + 50) > target) && ((top - 50) < target))) {
          console.log('collision')
          var thisLeft = parseFloat($(arr[j].$node).css("left").slice(0, -2));
          var thisTop = parseFloat($(arr[j].$node).css("top").slice(0, -2));
          $(arr[j]).attr("src", "BackGround/smoke.gif");
          var blow = function() {
            console.log('remove');
            $(arr[j]).remove();
          };
          setTimeout(blow.bind(arr[j]), 500);
        }
      }
      
    }
    
  }
  
}