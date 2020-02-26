"use strict";

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat("Fluffy", "Grey");
var muffin = new Cat("Muffin", "Brown");

Cat.prototype = { age: 5 };

var showbell = new Cat("Snowbell", "White");

display(fluffy.__proto__);
display(fluffy.__proto__.__proto__);
display(fluffy.__proto__.__proto__.__proto__);
