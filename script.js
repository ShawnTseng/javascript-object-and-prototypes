"use strict";

class Animal {
  constructor(voice) {
    this.voice = voice || "grunt";
  }

  speak() {
    display(this.voice);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super("Meow");
    this.name = name;
    this.color = color;
  }
}

var fluffy = new Cat("fluffy", "White");
fluffy.speak();

display(fluffy instanceof Animal);
display(fluffy instanceof Cat);
display(fluffy);
display(fluffy.__proto__);
display(fluffy.__proto__.__proto__);
