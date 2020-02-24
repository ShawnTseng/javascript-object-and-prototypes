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
  name: { first: "Fluffy", last: "LaBeouf" },
  color: "White"
};

Object.defineProperty(cat, "fullName", {
  get: function() {
    return this.name.first + " " + this.name.last;
  },
  set: function(value) {
    var nameList = value.split(" ");
    this.name.first = nameList[0];
    this.name.last = nameList[1];
  }
});

display(cat.fullName);
display(cat.name.first);
display(cat.name.last);

cat.fullName = "Ray Cho";

display(cat.fullName);
display(cat.name.first);
display(cat.name.last);
