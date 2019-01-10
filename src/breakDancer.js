var MakeBreakDancer = function(top, left, time) {
  MakeDancer.call(this, top, left, time);
};

MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;
MakeBreakDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};