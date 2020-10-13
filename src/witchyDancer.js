var makeWitchyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('witchyDancer');
  this.$image = $('<img class="witch" src="https://www.kindpng.com/imgv/JJTbox_witch-to-use-png-image-clipart-cute-witch/">');
  this.$node.append(this.$image);
};

makeFeistyDancer.prototype = Object.create(makeDancer.prototype);
makeWitchyDancer.prototype.constructor = makeWitchyDancer;

makeWitchyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
