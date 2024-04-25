const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
// const display = document.querySelector('.display');

const span = document.querySelector(".span1");
// const span2 = document.querySelector(".span2");

const equal_button = document.querySelector("#equal");

let array = [];
let arr = [];
let concat,
  op,
  y = "";
let result;
let storeNum,
  storeOpr,
  fullArray,
  i,
  n,
  variable,
  firstNum,
  secNum,
  last,
  operator,
  nextIndex,
  Target;
container.addEventListener("click", (event) => {
  Target = event.target;
  // console.log(Target);
  switch (Target.id) {
    case "add":
      variable = "add";
      display(variable);
      break;
    case "minus":
      variable = "minus";
      display(variable);

      break;
    case "mod":
      variable = "mod";
      display(variable);
      break;

    case "pro":
      variable = "pro";
      display(variable);

      break;
    case "div":
      variable = "div";
      display(variable);
      break;
    case "one":
      // span.textContent = "1";
      variable = 1;
      display(variable);
      break;

    case "two":
      // span.textContent = "2";
      variable = 2;
      display(variable);
      break;
    case "three":
      // span.textContent = "3";
      variable = 3;
      display(variable);
      break;
    case "four":
      // span.textContent = "4";
      variable = 4;
      display(variable);
      break;
    case "five":
      // span.textContent = "5";
      variable = 5;
      display(variable);
      break;
    case "six":
      // span.textContent = "6";
      variable = 6;
      display(variable);
      break;
    case "seven":
      // span.textContent = "7";
      variable = 7;
      display(variable);
      break;

    case "eight":
      // span.textContent = "8";
      variable = 8;
      display(variable);
      break;
    case "nine":
      // span.textContent = "9";
      variable = 9;
      display(variable);
      break;
    case "zero":
      // span.textContent = "0";
      variable = 0;
      display(variable);
      break;
    case "point":
      span.textContent = ".";
      variable = ".";
      display(variable);
      break;
    // case 'plus_minus':
    // span.textContent = '.';
    // variable = . ;
    // display(variable);
    // break;
  }
});

function display(numbers) {
  array.push(numbers);
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (typeof arr[i] === "number") {
      op = "";
      concat += arr[i].toString();
      span.textContent = concat;
      console.log(concat);
      storeNum = storeVar(concat);
    } else {
      op = arr[i];
      concat = "";
      storeOpr = storeOp(operator);
    }
  }

  //Listening to display the result
  equal_button.addEventListener("click", function (storeOpr, storeNum) {
    operate(storeOpr, storeNum);
  });
  function operate(storeOpr, storeNum) {
    if (storeOpr == "add") return add(storeNum);

    if (storeOpr == "minus") return minus(storeNum);

    if (storeOpr == "pro") return pro(storeNum);

    if (storeOpr == "mod") return mod(storeNum);

    if (storeOpr == "div") return div(storeNum);
  }
}
function storeVar(variable) {
  array.push(variable);
  console.log(array);
  arr = array.map((el) => parseInt(el, 10));
  return arr;
}
function storeOp(operator) {
  op = operator;
  console.log(op);
  return op;
}
// function operate(storeOpr, storeNum) {
//   if (storeOpr == "add") return add(storeNum);

//   if (storeOpr == "minus") return minus(storeNum);

//   if (storeOpr == "pro") return pro(storeNum);

//   if (storeOpr == "mod") return mod(storeNum);

//   if (storeOpr == "div") return div(storeNum);
// }

function add(storeNum) {
  return storeNum[i] + storeNum[i + 1];
}
function minus(storeNum) {
  return storeNum[i] - storeNum[i + 1];
}
function pro(storeNum) {
  return storeNum[i] * storeNum[i + 1];
}
function div(storeNum) {
  if (storeNum[i + 1] == !0) return storeNum[i] / storeNum[i + 1];
  else return undefined;
}
function mod(storeNum) {
  return storeNum[i] % storeNum[i + 1];
}
