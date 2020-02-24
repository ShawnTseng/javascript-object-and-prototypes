"use strict";

// var array1 = new Array("red", "blue", "green");
// var array2 = ["one", "two", "three"];

// Object.defineProperty(Array.prototype, "last", {
//   get: function() {
//     return this[this.length - 1];
//   }
// });

// display(array1.last);
// display(array2.last);

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 1;

var fluffy = new Cat("Fluffy", "White");
var soy = new Cat("Soy", "Grey");

display(Cat.prototype);
display(fluffy.__proto__);
display(soy.__proto__);
display(Cat.prototype === fluffy.__proto__);
