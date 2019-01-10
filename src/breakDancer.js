var MakeBreakDancer = function(top, left, time) {
  MakeDancer.call(this, top, left, time);
  var oldStep = this.step;
  this.step = function(timeBetweenSteps) {
    oldStep.call(this, timeBetweenSteps);
    this.$node.toggle();
  };
};

MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;
