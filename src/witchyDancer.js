var makeWitchyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('witchyDancer');
};

makeFeistyDancer.prototype = Object.create(makeDancer.prototype);
makeWitchyDancer.prototype.constructor = makeWitchyDancer;

makeWitchyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};