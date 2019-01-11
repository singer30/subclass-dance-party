var MakeBreakDancer = function(top, left, time) {
  this.count = 0;
  MakeDancer.call(this, top, left, time);
};

MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;
MakeBreakDancer.prototype.step = function(timeBetweenSteps) {

  if (this.count === 0) {
    this.count = 1;
    $(this.$node).rotate({
      angle: 0,
       center: ["100%", "100%"],
      animateTo:90,
      });
  } else {
    this.count = 0;
    $(this.$node).rotate({
      angle: 90,
      center: ["100%", "100%"],
      animateTo:0,
      });
  }
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
};