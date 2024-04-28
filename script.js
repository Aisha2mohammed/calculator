const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const equal_button = document.querySelector("#equal");

let array = [];
let arr = [];
let last = [];
let storeNum = [];
let storeOpr = [];
let operator = [];
let concat;
let fullArray, result, op, i, n, variable, firstNum, secNum, nextIndex, Target;
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
    } else {
      op = array[i];
      concat = "";
    }
  }

  equal_button.addEventListener("click", function () {
    new_array(array);

    result = operate(storeNum, storeOpr);
    console.log(result);
    span.textContent = result;
    array.unshift(result);
  });
}

function new_array(array) {
  let join = array[0].toString();
  for (let k = 1; k < array.length; k++) {
    if (typeof array[k] === "number") {
      opr = "";
      join += array[k].toString();
    }
    if (typeof array[k] === "string") {
      storeNum = storeVar(join);
      join = "";
      let opr = array[k];
      storeOpr = storeOp(opr);
      console.log(storeOpr);
      console.log(storeNum);
    }
  }
}
function storeVar(variable) {
  array.push(variable);
  console.log(array);
  arr = array.map((el) => parseInt(el, 10));
  console.log(arr);
  return arr;
}
function storeOp(name) {
  operator.push(name);
  console.log(operator);
  return operator;
  //   if (
  //     operator === "add" ||
  //     operator === "minus" ||
  //     operator === "pro" ||
  //     operator === "mod" ||
  //     operator === "div"
  //   ) {
  //     console.log(operator);
  //     return operator;
  //   } else return undefined;
}

function operate(op, last) {
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
