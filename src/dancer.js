var MakeDancer = function(top, left, timeBetweenSteps) { 
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.move = function() {
  var thisLeft = parseFloat($(this.$node).css("left").slice(0, -2)) + 100;
  var thisTop = parseFloat($(this.$node).css("top").slice(0, -2)) + 100;
  if (thisLeft > window.innerWidth) {
    thisLeft = thisLeft - window.innerWidth;
  }
  // console.log(thisLeft);
  // console.log(thisTop);
  
  $(this.$node).css("left", thisLeft);
  
  //$(window.dancers[i].$node).css('left', parseFloat((window.dancers[i].$node).css("width").slice(0, -2))/2);
};

