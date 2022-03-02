//DOM

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
