var makeWitchyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('witchyDancer');
  this.$image = $('<img class="witch" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FWZmgVLMt7mp44%2Fgiphy.gif&f=1&nofb=1">');
  this.$node.append(this.$image);
  this.position = left;
  this.width = $(window).width();
};

makeWitchyDancer.prototype = Object.create(makeDancer.prototype);
makeWitchyDancer.prototype.constructor = makeWitchyDancer;

makeWitchyDancer.prototype.helper = function() {
  this.position = Math.floor(Math.random() * this.width);
  this.$node.animate({
    left: `${this.position}px`
  }, "slow");
};

// makeWitchyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };

