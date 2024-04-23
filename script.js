const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
// const display = document.querySelector('.display');

const span = document.querySelector(".span1");
// const span2 = document.querySelector(".span2");

const equal_button = document.querySelector("#equal");

let array = [];
let arr = [];
let concat,
  y = "";
let num,
  m,
  i,
  n,
  variable,
  firstNum,
  result,
  secNum,
  operator,
  nextIndex,
  Target;
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
      storeVar(variable);
    }
    if (
      button.id == "minus" ||
      button.id == "add" ||
      button.id == "div" ||
      button.id == "pro" ||
      button.id == "mod"
    ) {
      operator = button.id;
      storeOp(operator);
    }
    if (button.id == "AC") {
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
  // console.log(array);
  // m = array[0].toString();
  // span.textContent = m;
  // console.log(m);

  for (let k = 1; k < array.length; k++) {
    // while(array.length % 3 ==0)
    if (typeof array[k] === "number") {
  
    //   num = array[k];
    //   m += num.toString();
    //   span.textContent = m;
    //   // firstNum = parseInt(m, 10);
    //   firstNum = parseInt(m, 10);
    //   // firstNum = parseInt(m, 10);
    //   console.log(firstNum);
    // } else {
    //   span.textContent = "";
    // operator = array[k];
    // n = parseInt(array[k + 1]);
    // span.textContent = n;
    // secNum = parseInt(n, 10);
    // console.log(operator);
    // console.log(secNum);
    // k++;
    //   aisha = array.forEach((val) => {
    //     if (typeof val === "number") {
    //       number = val;
    //     } else {
    //       operator = val;
    //     }
    //   });
  }
  // equal_button.addEventListener("click", () =>
  //   operate(firstNum, operator, secNum)
  // );
}
equal_button.addEventListener("click", () =>
  operate(firstNum, operator, secNum)
);

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
