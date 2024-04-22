const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
// const display = document.querySelector('.display');
const span = document.querySelector("span");
const equal_button = document.querySelector("#equal");

let variable;
let array = [];
let firstNum;
let arr = [];
let result;
let secNum;
let operator;
let Target;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Target = event.target;
    if (
      !(
        button.id == "minus" ||
        button.id == "add" ||
        button.id == "div" ||
        button.id == "pro" ||
        button.id == "mod" ||
        button.id == "AC" ||
        button.id == "del" ||
        button.id == "equal"
      )
    ) {
      let val = button.id;
      variable = parseInt(val, 10);
      span.textContent = variable;
      display(variable);
    } else if (
      button.id == "minus" ||
      button.id == "add" ||
      button.id == "div" ||
      button.id == "pro" ||
      button.id == "mod"
    ) {
      operator = button.id;
      display(operator);
    } else if (button.id == "AC") {
      span.textContent = "";
    }
    //  else if (button.id == "point") {
    //   let val = button.id;
    //   variable = parseInt(val, 10);
    //   span.textContent = variable;
    //   display(variable);
    // }
  });
});
function display(numbers) {
  array.push(numbers);
  console.log(array);

  for (let k = 0; k < array.length; i++) {
    if (isNumber(array[i])) {
      num = array[i];
      if (isNumber(array[i - 1])) concat = num.concat(array[i - 1]);
    }
  }
}

function operate(val, operator, f1) {
  if (operator == "+") add(val, f1);

  if (operator == "-") minus(val, f1);

  if (operator == "*") pro(val, f1);

  if (operator == "%") mod(val, f1);

  if (operator == "/") div(val, f1);
}

function add(a, c) {
  return a + c;
}
function minus(a, c) {
  return a - c;
}
function pro(a, c) {
  return a * c;
}
function div(a, c) {
  if (c == !0) return a / c;
  else return undefined;
}
function mod(a, c) {
  return a % c;
}

function isNumber(character) {
  return /0-9/.test(character);
}
