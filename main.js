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
const $eraseButton = document.querySelector(".delete");
const $inputsNumbers = document.querySelectorAll(".inputs .row .button.number");
const $inputOperations = document.querySelectorAll(".inputs .button.operation");

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

//Keyboard function

function keyboard() {
	document.addEventListener("keydown", (e) => {
		let key = e.keyCode;
		console.log(key);
		$inputsNumbers.forEach((input) => {
			console.log(input.classList[2]);
			if (input.classList[2] == key || input.classList[3] == key) {
				$screen.value = $screen.value + input.innerText;
			}
		});
		$inputOperations.forEach((operation) => {
			if (
				operation.classList[2] == e.keyCode &&
				currentOperationSimbol === ""
			) {
				console.log(operation.id);
				currentOperation = operation.id;
				currentOperationSimbol = operation.innerText;
				currentValue = $screen.value;
				$screen.value = $screen.value + currentOperationSimbol;
			}
		});

		if (e.keyCode == "187" || e.keyCode == "13") {
			let input = $screen.value.split(currentOperationSimbol);
			nextValue = input[1];
			$screen.value = operate(currentValue, nextValue, currentOperationSimbol);
			currentOperationSimbol = "";
		}
		if (e.keyCode == "110") {
			$screen.value = $screen.value + ".";
		}
		if (e.keyCode == "8") {
			let screenValue = Array.from($screen.value);
			screenValue.pop();
			let string = screenValue.join("");
			$screen.value = string;
		}
	});
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

function addDot() {
	$dotButton.addEventListener("click", () => {
		$screen.value = $screen.value + ".";
	});
}

function erase() {
	$eraseButton.addEventListener("click", () => {
		let screenValue = Array.from($screen.value);
		screenValue.pop();
		let string = screenValue.join("");
		$screen.value = string;
	});
}

function clear() {
	$clear.addEventListener("click", () => {
		$screen.value = "";
		currentValue = "";
		nextValue = "";
		currentOperationSimbol = "";
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
			if (currentOperationSimbol === "") {
				currentValue = $screen.value;
				currentOperation = operation.getAttribute("id");
				currentOperationSimbol = operation.querySelector("p").innerText;
				$screen.value = `${currentValue}${currentOperationSimbol}`;
				console.log(currentOperationSimbol);
				console.log(currentValue);
			} else {
				//clear the value, resolving the equation
				let input = $screen.value.split(currentOperationSimbol);
				nextValue = input[1];
				$screen.value = operate(
					currentValue,
					nextValue,
					currentOperationSimbol
				);
				//adds the new operation
				currentOperationSimbol = "";
				currentValue = $screen.value;
				currentOperation = operation.getAttribute("id");
				currentOperationSimbol = operation.querySelector("p").innerText;
				$screen.value = `${currentValue}${currentOperationSimbol}`;
			}
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
		currentOperationSimbol = "";
	});
}

function calculus() {
	erase();
	clear();
	addDot();
	buttonsInput();
	operationInput();
	equalInput();
	keyboard();
}

calculus();
