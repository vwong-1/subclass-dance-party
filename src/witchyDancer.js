var makeWitchyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('witchyDancer');
  this.$image = $('<img class="witch" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FWZmgVLMt7mp44%2Fgiphy.gif&f=1&nofb=1">');
  this.$node.append(this.$image);
};

makeWitchyDancer.prototype = Object.create(makeDancer.prototype);
makeWitchyDancer.prototype.constructor = makeWitchyDancer;

makeWitchyDancer.prototype.helper = function() {
  this.$node.toggle();
};

// makeWitchyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };

