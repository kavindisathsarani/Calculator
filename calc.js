const display = document.getElementById("display");

let currentInput = ""; // Holds the current number input
let previousInput = ""; // Holds the previous number input
let operator = ""; // Stores the operator

// Function to append numbers to the display
function appendToDisplay(input) {
  if (operator && currentInput === "") {
    // If there's an operator, clear the display for the next input
    display.value = "";
  }

  currentInput += input;
  display.value = currentInput;
}

// Function to set the operator
function setOperator(op) {
  if (currentInput === "") return; // Don't set operator if no current input

  if (previousInput && operator) {
    // Calculate if there's already a previous input and an operator
    calculate();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = ""; // Reset current input for the next number
  display.value = operator; // Display the operator momentarily
}

// Function to clear the display and reset all variables
function clearDisplay() {
  display.value = "";
  currentInput = "";
  previousInput = "";
  operator = "";
}

// Function to perform the calculation
function calculate() {
  if (!previousInput || !currentInput || !operator) return; // Do nothing if missing values

  try {
    const expression = `${previousInput} ${operator} ${currentInput}`;
    const result = eval(expression);
    display.value = result;

    // Reset for next calculation
    currentInput = result.toString();
    previousInput = "";
    operator = "";
  } catch (error) {
    display.value = "Error";
  }
}
