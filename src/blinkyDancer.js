var MakeBlinkyDancer = function(top, left, time) {
  MakeDancer.call(this, top, left, time);
  var oldStep = this.step;
  this.step = function(timeBetweenSteps) {
    oldStep.call(this, timeBetweenSteps);
    this.$node.toggle();
  };
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
