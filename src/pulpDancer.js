var MakePulpDancer = function(top, left, time) {
  MakeDancer.call(this, top, left, time);
  var oldStep = this.step;
  this.step = function(timeBetweenSteps) {
    oldStep.call(this, timeBetweenSteps);
    this.$node.toggle();
  };
};

MakePulpDancer.prototype = Object.create(MakeDancer.prototype);
MakePulpDancer.prototype.constructor = MakePulpDancer;
