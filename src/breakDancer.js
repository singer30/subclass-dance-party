var MakeBreakDancer = function(top, left, time) {
  this.count = 0;
  this.origin = top;
  MakeDancer.call(this, top, left, time);
};

MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;
MakeBreakDancer.prototype.step = function(timeBetweenSteps) {
  //var top = parseFloat($(this.$node).css("top").slice(0, -2));
  //var left = $(this.$node).css("left");
  //var count = this.count;
  // console.log(top);
  // if (!isNaN(top)) {
  //   if (this.count < 1) {
  //     this.count++;
  //     //this.setPosition((top + this.count), left);
  //     $(this.$node).css("top", `${top - 50}px`);
  //   } else {
  //     this.count = 0;
  //     $(this.$node).css('top', this.origin);
  //   }
  // }
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
  //this.$node.toggle();
};