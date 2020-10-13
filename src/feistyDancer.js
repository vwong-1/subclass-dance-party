var makeFeistyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('feistyDancer');
};

makeFeistyDancer.prototype = Object.create(makeDancer.prototype);
makeFeistyDancer.prototype.constructor = makeFeistyDancer;

makeFeistyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
