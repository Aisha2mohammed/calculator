const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const equal_button = document.querySelector("#equal");

let array = [];
let arr = [];
let last = [];

let concat;
let op;
let result;
let storeNum,
  storeOpr,
  fullArray,
  i,
  n,
  variable,
  firstNum,
  secNum,
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
    case "1":
      span.textContent = "1";
      variable = 1;
      display(variable);
      break;

    case "2":
      span.textContent = "2";
      variable = 2;
      display(variable);
      break;
    case "3":
      span.textContent = "3";
      variable = 3;
      display(variable);
      break;
    case "4":
      span.textContent = "4";
      variable = 4;
      display(variable);
      break;
    case "5":
      span.textContent = "5";
      variable = 5;
      display(variable);
      break;
    case "6":
      span.textContent = "6";
      variable = 6;
      display(variable);
      break;
    case "7":
      span.textContent = "7";
      variable = 7;
      display(variable);
      break;

    case "8":
      span.textContent = "8";
      variable = 8;
      display(variable);
      break;
    case "9":
      span.textContent = "9";
      variable = 9;
      display(variable);
      break;
    case "0":
      span.textContent = "0";
      variable = 0;
      display(variable);
      break;
    // case "equal":
    //   result = operate(storeOpr, storeNum);
    //   span.textContent = result;
    //   variable = result;
    //   display(variable);
  }
});

function display(numbers) {
  array.push(numbers);
  console.log(array);
  concat = array[0].toString();
  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] === "number") {
      // op = "";
      concat += array[i].toString();
      span.textContent = concat;
      console.log(concat);
      last = parseInt(concat, 10);
      console.log(last);

      // storeNum = storeVar(concat);
    } else {
      op = array[i];
      concat = "";
      // storeOpr = storeOp(operator);
    }
  }
  equal_button.addEventListener("click", function () {
    result = operate(op, last);
    console.log(result);
    span.textContent = result;
    array.unshift(result);
  });
}

function storeVar(variable) {
  array.push(variable);
  console.log(array);
  arr = array.map((el) => parseInt(el, 10));
  console.log(arr);
  return arr;
}
function storeOp(name) {
  operator = name;
  console.log(operator);

  if (
    operator === "add" ||
    operator === "minus" ||
    operator === "pro" ||
    operator === "mod" ||
    operator === "div"
  ) {
    console.log(operator);
    return operator;
  } else return undefined;
}

function operate(op, last) {
  // console.log("storeOpr:", storeOpr);
  // console.log("storeNum:", storeNum);

  if (op == "add") return add(last);

  if (op == "minus") return minus(last);

  if (op == "pro") return pro(last);

  if (op == "mod") return mod(last);

  if (op == "div") return div(last);
}

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
