// Created by Vince Chang

let runningTotal = 0;

// Keep track of user input
let buffer = "0";

// Remember the last operator they chose
let previousOperator = null;

// Screen reference
const screen = document.querySelector(".screen");

// Binding
document
  .querySelector(".calc-buttons")
  .addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
  });

// If a user clicks on a button, handle logic if press number or operator
function buttonClick(value) {
  // CASE: Operator
  if (isNaN(parseInt(value))) {
    handleOperator(value);
  }
  // CASE: Number
  else {
    handleNumber(value);
  }
}

// If the user clicks on a Operator
function handleOperator(value) {
  switch(value){
    case: 'C':
      buffer = "0";
      runningTotal = 0;
      break;
    case: '=':
      if(!previousOperator){
        return;
      }
      else{ // Do the operation
        flushOperation(parseInt(value));
      }
  }
}

// If the user clicks on a Number
function handleNumber(value) {
  // Update the screen
  if (buffer === "0") {
    buffer = value;
  }
  // Append because user is typing longer than 1 digit
  else {
    buffer += value;
  }
  // Call to update the screen with the new number
  rerender();
}

// Updating the screen with what is in buffer
function rerender() {
  screen.innerText = buffer;
}
