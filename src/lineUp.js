var lineUp = function() {
  console.log('line up!');
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] instanceof MakeBreakDancer) {
      $(window.dancers[i].$node).css('left', parseFloat((window.dancers[i].$node).css("width").slice(0, -2))/2);
      console.log(parseFloat((window.dancers[i].$node).css("width").slice(0, -2)));
    } else {
      $(window.dancers[i].$node).css('left', 50);
      console.log(window.dancers[i]);
    }
  }
};