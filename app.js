// caluclating functions

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function Caluclate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.pop();
}
