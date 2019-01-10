var MakeBlinkyDancer = function(top, left, time) {
  MakeDancer.call(this, top, left, time);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};