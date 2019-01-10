var makeDancer = function() { //top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
};

makeDancer.prototype.step = function(fn, timeBetweenSteps) {
  setTimeout(fn.bind(this, timeBetweenSteps), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

