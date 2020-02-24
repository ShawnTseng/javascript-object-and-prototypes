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

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// var cat = new Cat("Fluffy", "White");

// var cat = Object.create(Object.prototype, {
//   name: {
//     value: "Fluffy",
//     enumerable: true,
//     writable: true,
//     configurable: true
//   },
//   color: {
//     value: "White",
//     enumerable: true,
//     writable: true,
//     configurable: true
//   }
// });

var cat = {
  name: "Fluffy",
  color: "White"
};

cat["Eye Color"] = "Gold";

display(cat["Eye Color"]);
