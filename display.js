function display() {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "object") {
      displayObject(arguments[i]);
    } else {
      displayValue(arguments[i], true);
    }
  }
}

function displayObject(object) {
  displayValue(getTypeName(object) + " {");
  for (const propertyName in object) {
    displayValue(propertyName + ": " + object[propertyName]);
  }
  displayValue("}", true);
}

function displayValue(value, addMargin, addPadding) {
  const div = document.createElement("div");
  div.style.fontSize = "32px";
  if (addMargin) {
    div.style.marginBottom = "30px";
  }
  if (addPadding) {
    div.style.paddingLeft = "30px";
  }
  div.innerText = value;
  document.body.appendChild(div);
}

function getTypeName(object) {
  return object.constructor.name;
}
