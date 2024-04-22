const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
// const display = document.querySelector('.display');

const span = document.querySelector(".span1");
// const span2 = document.querySelector(".span2");

const equal_button = document.querySelector("#equal");

let array = [];
let arr = [];
let concat = "";
let num, variable, firstNum, result, secNum, operator, Target;
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
      // span.textContent = variable;
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
  let m;

  // console.log(array);
  m = array[0].toString();
  span.textContent = m;
  for (let k = 1; k < array.length; k++) {
    if (typeof array[k] === "number") {
      num = array[k];
      m += num.toString();
      console.log(m);
      span.textContent = m;
    } else {
      operator = array[k];
      secNum = array[k + 1];

      // span1.textContent = "";
      span.textContent = secNum;
    }
  }
}
// span.textContent = m;
// span.textContent = secNum;
equal_button.addEventListener("click", () => operate(m, operator, secNum));

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
