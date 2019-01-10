var makeBlinkyDancer = function(top, left, time) {
  makeDancer.call(this, top, left, time);
  var oldStep = this.step;
  this.step = function(timeBetweenSteps) {
    oldStep.call(this, timeBetweenSteps);
    this.$node.toggle();
  };
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
