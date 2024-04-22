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

//       break;
//     case "five":
//       span.textContent = "5";
//       variable = 5;
//       display(variable);
//       break;
//     case "six":
//       span.textContent = "6";
//       variable = 6;
//       display(variable);
//       break;
//     case "seven":
//       span.textContent = "7";
//       variable = 7;
//       display(variable);
//       break;

//     case "eight":
//       span.textContent = "8";
//       variable = 8;
//       display(variable);
//       break;
//     case "nine":
//       span.textContent = "9";
//       variable = 9;
//       display(variable);
//       break;
//     case "zero":
//       span.textContent = "0";
//       variable = 0;
//       display(variable);
//       break;
//     case "point":
//       span.textContent = ".";
//       variable = ".";
//       display(variable);
//       break;
// case 'plus_minus':
// span.textContent = '.';
// variable = . ;
// display(variable);
// break;
//   }
// });
// function display(numbers) {
//   array.push(numbers);
//   console.log(array);

//   let i = 0;
//   while (i < array.length) {
//     if (isNumber(array[i])) {
//       firstNum = array[0];
//       if (isNumber(array[i - 1])) {

//       let   arr1 = array.join("");
//         console.log(arr1);// Do something based on the condition if the next element is a number
//       }

//     } else {
//       operator = array[i];
//       if(isNumber(array[i-1])){}

//     };
//     i++;
//   }
// }

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
