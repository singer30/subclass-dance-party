var MakePulpDancer = function(top, left, time) {
  MakeDancer.call(this, top, left, time);
};

MakePulpDancer.prototype = Object.create(MakeDancer.prototype);
MakePulpDancer.prototype.constructor = MakePulpDancer;
MakePulpDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};