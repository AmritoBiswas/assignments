function calculator() {
	event.preventDefault();

	const fNumber = document.getElementById("firstNumber").value;
	if (fNumber == "") {
		const outPut = "Please Input the first Number";
		document.getElementById("answer").innerHTML = outPut;
		return;
	}
	const firstNumber = parseFloat(fNumber);

	const sNumber = document.getElementById("secondNumber").value;

	const secondNumber = parseFloat(sNumber);

	const operation = document.getElementById("select").value;

	if (operation === "plus") {
		const outPut = firstNumber + secondNumber;
		document.getElementById("answer").innerHTML = outPut;
	} else if (operation === "minus") {
		const outPut = firstNumber - secondNumber;
		document.getElementById("answer").innerHTML = outPut;
	} else if (operation === "mul") {
		const outPut = firstNumber * secondNumber;
		document.getElementById("answer").innerHTML = outPut;
	} else if (operation === "div") {
		const outPut = firstNumber / secondNumber;
		document.getElementById("answer").innerHTML = outPut;
	} else {
		const outPut = "Please Select an Arethmatic Operation";
		document.getElementById("answer").innerHTML = outPut;
		return;
	}
	if (sNumber == "") {
		const outPut = "Please Input the Second Number";
		document.getElementById("answer").innerHTML = outPut;
	}
}
