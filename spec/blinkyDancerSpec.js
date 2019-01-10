describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('breakDancer', function() {

  var breakDancer, clock;
  var timeBetweenSteps = 200;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    breakDancer = new MakeBreakDancer(20, 30, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(breakDancer.$node, 'toggle');
    breakDancer.step();
    expect(breakDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(breakDancer, 'step');
      expect(breakDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(breakDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(breakDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('pulpDancer', function() {

  var pulpDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pulpDancer = new MakePulpDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pulpDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(pulpDancer.$node, 'toggle');
    pulpDancer.step();
    expect(pulpDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pulpDancer, 'step');
      expect(pulpDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pulpDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pulpDancer.step.callCount).to.be.equal(2);
    });
  });
});


