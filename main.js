//Global Variables
let currentValue = "";
let nextValue = "";
let currentOperation = "";
let currentOperationSimbol = "";

//DOM
const $screen = document.querySelector(".screen");

const $add = document.querySelector("add");
const $substract = document.querySelector("substract");
const $divide = document.querySelector("divide");
const $multiply = document.querySelector("multiply");
const $clear = document.querySelector(".clear");
const $equal = document.querySelector(".equal");
const $operationsList = document.querySelectorAll(".operation");
const $numbers = document.querySelectorAll(".number");
const $dotButton = document.querySelector(".dot");

// Calculator Operations Functions

function add(number1, number2) {
	return Number(number1) + Number(number2);
}
function substract(number1, number2) {
	return Number(number1) - Number(number2);
}
function multiply(number1, number2) {
	return Number(number1) * Number(number2);
}
function divide(number1, number2) {
	return Number(number1) / Number(number2);
}

//Main Operator function

function operate(number1, number2, operationSimbol) {
	if (operationSimbol === "+") {
		return add(number1, number2);
	} else if (operationSimbol === "/") {
		return divide(number1, number2);
	} else if (operationSimbol === "*") {
		return multiply(number1, number2);
	} else {
		return substract(number1, number2);
	}
}

function displayResult(operation) {
	$screen.value = operation;
}

function clear() {
	$clear.addEventListener("click", () => {
		$screen.value = "";
		currentValue = 0;
		nextValue = 0;
	});
}

function buttonsInput() {
	$numbers.forEach((number) => {
		$screen.value = "";
		number.addEventListener("click", () => {
			$screen.value = $screen.value + number.innerText;
		});
	});
}

function operationInput() {
	$operationsList.forEach((operation) => {
		operation.addEventListener("click", () => {
			currentValue = $screen.value;
			currentOperation = operation.getAttribute("id");
			currentOperationSimbol = operation.querySelector("p").innerText;
			$screen.value = `${currentValue}${currentOperationSimbol}`;
			console.log(currentOperationSimbol);
			console.log(currentValue);
		});
	});
}

function equalInput() {
	$equal.addEventListener("click", () => {
		let input = $screen.value.split(currentOperationSimbol);
		nextValue = input[1];
		console.log(currentOperation);
		console.log(currentValue);
		console.log(nextValue);
		$screen.value = operate(currentValue, nextValue, currentOperationSimbol);
	});
}

function calculus() {
	clear();
	buttonsInput();
	operationInput();
	equalInput();
}

calculus();

// store number input when user presses an operator.
// save chosen operation to pass on operate
// when the user presses =, pass the second number and operate.
