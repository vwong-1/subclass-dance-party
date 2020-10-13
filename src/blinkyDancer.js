//Refactor into pseudoclassical

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
  this.$image = $('<img class="ghost" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FxYxMqOwafEbL2%2Fgiphy.gif&f=1&nofb=1">');
  this.$node.append(this.$image);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };

makeBlinkyDancer.prototype.helper = function() {
  this.$node.fadeToggle("slow");
};

// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);


//   // // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // // so we must keep a copy of the old version of this function

//   // blinkyDancer.step = function() {
//   //   // call the old version of step at the beginning of any call to this new version of step
//   //   oldStep();
//   //   // toggle() is a jQuery method to show/hide the <span> tag.
//   //   // See http://api.jquery.com/category/effects/ for this and
//   //   // other effects you can use on a jQuery-wrapped html tag.
//   //   blinkyDancer.$node.toggle();
//   // };
//   // return blinkyDancer;
// };