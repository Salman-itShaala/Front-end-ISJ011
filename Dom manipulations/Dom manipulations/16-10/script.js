const num1 = document.getElementById("num-1");
const num2 = document.getElementById("num-2");

// select the result para
const resultPara = document.getElementById("my-para");

function calculateSum() {
  const firstNumber = parseFloat(num1.value);
  const secondNumber = parseFloat(num2.value);

  resultPara.innerHTML = `Sum is: ${firstNumber + secondNumber}`; // use backticks
}

function calculateSub() {
  const firstNumber = parseFloat(num1.value);
  const secondNumber = parseFloat(num2.value);

  resultPara.innerHTML = `Substraction is: ${firstNumber - secondNumber}`; // use backticks
}

function calculateMult() {
  const firstNumber = parseFloat(num1.value);
  const secondNumber = parseFloat(num2.value);

  resultPara.innerHTML = `Multiplication is: ${firstNumber * secondNumber}`; // use backticks
}

function calculateDiv() {
  const firstNumber = parseFloat(num1.value);
  const secondNumber = parseFloat(num2.value);

  resultPara.innerHTML = `Division is: ${firstNumber / secondNumber}`; // use backticks
}
