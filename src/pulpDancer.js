var MakePulpDancer = function(top, left, time) {
  MakeDancer.call(this, top, left, time);
  this.angle = 0;
};

MakePulpDancer.prototype = Object.create(MakeDancer.prototype);
MakePulpDancer.prototype.constructor = MakePulpDancer;
MakePulpDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  this.angle += 15;
  $(this.$node).rotate(this.angle);
  // var rotation = function (){
  // $("#img").rotate({
  //   angle:0,
  //   animateTo:360,
  //   callback: rotation
  // });

  //this.$node.toggle();
};