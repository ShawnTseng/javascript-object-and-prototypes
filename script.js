"use strict";

var array1 = new Array("red", "blue", "green");
var array2 = ["one", "two", "three"];

Object.defineProperty(Array.prototype, "last", {
  get: function() {
    return this[this.length - 1];
  }
});

display(array1.last);
display(array2.last);
