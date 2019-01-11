var MakePulpDancer = function(top, left, time) {
  MakeDancer.call(this, top, left, time);
  this.size = 0;
};

MakePulpDancer.prototype = Object.create(MakeDancer.prototype);
MakePulpDancer.prototype.constructor = MakePulpDancer;
MakePulpDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  if (this.size < 50) {
    this.size += 10;
  } else {
    this.size = 0;
  }
  this.move();
  $(this.$node).css("border-width", `${this.size}px`)
};