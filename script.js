// display("Hello World");
"use strict";

// var cat = {
//   name: "Fluffy",
//   color: "White",
//   speak: function() {
//     display("Meeooooooow");
//   }
// };

// cat.age = 0.9;

// display(cat.age);
// cat.speak();

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var cat = new Cat("Fluffy", "White");

display(cat);
