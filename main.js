//Global Variables
let currentValue = "";
let currentOperation = "";

//DOM
const $screen = document.querySelector(".screen");

const $add = document.querySelector("add");
const $substract = document.querySelector("substract");
const $divide = document.querySelector("divide");
const $multiply = document.querySelector("multiply");
const $clear = document.querySelector(".clear");

const $operationsList = document.querySelectorAll(".operation");
const $numbers = document.querySelectorAll(".number");

$numbers.forEach((number) => {
	$screen.value = "";
	number.addEventListener("click", () => {
		$screen.value = $screen.value + number.innerText;
	});
});

// Calculator Operations Functions

function add(number1, number2) {
	return number1 + number2;
}
function substract(number1, number2) {
	return number1 - number2;
}
function multiply(number1, number2) {
	return number1 * number2;
}
function divide(number1, number2) {
	return number1 / number2;
}

//Main Operator function

function operate(number1, number2, operation) {
	return operation(number1, number2);
}

function displayResult(operation) {
	$screen.value = operation;
}

function clear() {
	$clear.addEventListener("click", () => {
		$screen.value = "";
	});
}

clear();

console.log($operationsList);

$operationsList.forEach((operation) => {
	operation.addEventListener("click", () => {
		currentValue = $screen.value;
		currentOperation = operation.getAttribute("id");
		console.log(currentOperation);
		console.log(currentValue);
	});
});

// store number input when user presses an operator.
// save chosen operation to pass on operate
// when the user presses =, pass the second number and operate.
