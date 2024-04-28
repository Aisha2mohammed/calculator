const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const equal_button = document.querySelector("#equal");

let array = [];
let last = [];
let storeNum = [];
let storeOpr = [];
let newArray = [];
let concat;
let arr = [];
let join = "";
let fullArray,
  result,
  operator,
  newOp,
  reduce,
  op,
  variable,
  firstNum,
  secNum,
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
  }
});

function display(numbers) {
  array.push(numbers);
  console.log(array);
  concat = array[0].toString();
  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] === "number") {
      concat += array[i].toString();
      span.textContent = concat;
      console.log(concat);
      // last = parseInt(concat, 10);
      // console.log(last);
    } else {
      op = array[i];
      concat = "";
    }
  }

  equal_button.addEventListener("click", function () {
    let [storeNum, storeOpr] = new_array(array);

    for (let m = 0; m < storeNum.length; m++) {
      newArray = storeNum[m];
      if (newArray.length == 2) break;
    }
    for (let n = 0; n < storeOpr.length; n++) {
      newOp = storeOpr[n];
      if (storeOpr.length == 1) break;
    }

    let last_result = operate(newArray, newOpr);
    console.log(last_result);
    span.textContent = last_result;

    if (storeNum.length > 0) {
      storeNum.unshift(last_result);
    }
  });
}

function operate(newArray, newOpr) {
  if (newOpr === "add") {
    reduce = newArray.reduce((acc, val) => {
      acc += val;
    }, 0);
  }

  if (newOpr === "minus") {
    reduce = newArray.reduce((acc, val) => {
      acc -= val;
    }, 0);
  }

  if (newOpr === "pro") {
    reduce = newArray.reduce((acc, val) => {
      acc *= val;
    }, 0);
  }

  if (newOpr === "mod") {
    reduce = newArray.reduce((acc, val) => {
      acc %= val;
    }, 0);
  }

  if (newOpr === "div") {
    reduce = newArray.reduce((acc, val) => {
      acc /= val;
    }, 0);
  }
  return reduce;
}

function add(storeNum) {
  result = storeNum[0];
  for (let y = 0; y < storeNum.length; y++) {
    result += storeNum[y + 1];
  }
  return result;
}
function minus(storeNum) {
  result = storeNum[0];
  for (let y = 0; y < storeNum.length; y++) {
    result -= storeNum[y + 1];
  }
  return result;
}
function pro(storeNum) {
  result *= storeNum[0];
  for (let y = 0; y < storeNum.length; y++) {
    result = storeNum[y + 1];
  }
  return result;
}
function div(storeNum) {
  result = storeNum[0];
  for (let y = 0; y < storeNum.length; y++) {
    if (storeNum[y + 1] !== 0) result /= storeNum[y + 1];
    else result = undefined;
  }
  return result;
}
function mod(storeNum) {
  result %= storeNum[0];
  for (let y = 0; y < storeNum.length; y++) {
    result = storeNum[y + 1];
  }
  return result;
}

function new_array(array) {
  let join = array[0].toString();
  for (let k = 1; k < array.length; k++) {
    if (typeof array[k] === "number") {
      // storeOpr = storeOp(operator);
      join += array[k].toString();
    }
    if (typeof array[k] === "string") {
      storeNum = storeVar(join);
      join = "";
      operator = array[k];
      console.log(operator);
      storeOpr = storeOp(operator);
    }
  }
  storeNum = storeVar(join);
  return [storeNum, storeOpr];
}
function storeVar(variable) {
  arr.push(variable);
  console.log(arr);
  parsedArr = arr.map((el) => parseInt(el, 10));
  console.log(parsedArr);
  return parsedArr;
}

function storeOp(name) {
  last.push(name);
  console.log(last);
  return last;
}
