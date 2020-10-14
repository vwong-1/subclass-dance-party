var makeFeistyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('feistyDancer');
  this.$image = $('<img class="cat" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.scratch.mit.edu%2Fget_image%2Fgallery%2F838908_170x100.png&f=1&nofb=1">');
  this.$node.append(this.$image);
  this.angle = 0;
};

makeFeistyDancer.prototype = Object.create(makeDancer.prototype);
makeFeistyDancer.prototype.constructor = makeFeistyDancer;

makeFeistyDancer.prototype.helper = function() {
  this.angle += 45;
  this.$node.css({
    transform: `rotate(${this.angle}deg)`
  });
  // this.$node.rotate({
  //   angle: 0,
  //   animateTo: 180
  // });
};

// makeFeistyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };
