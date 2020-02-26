"use strict";

function Animal(voice) {
  this.voice = voice || "Grunt";
}

Animal.prototype.speak = function() {
  display(this.voice);
};

function Cat(name, color) {
  Animal.call(this, "Meow");
  this.name = name;
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat("fluffy", "White");
fluffy.speak();

display(fluffy instanceof Animal);
display(fluffy instanceof Cat);
display(fluffy);
display(fluffy.__proto__);
display(fluffy.__proto__.__proto__);

