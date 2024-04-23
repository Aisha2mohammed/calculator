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
let storeNum,
  storeOpr,
  i,
  n,
  variable,
  firstNum,
  result,
  secNum,
  last,
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
      span.textContent = val;
      variable = parseInt(val, 10);
      storeNum = storeVar(variable);
      console.log(storeNum);
    }
    if (
      button.id == "minus" ||
      button.id == "add" ||
      button.id == "div" ||
      button.id == "pro" ||
      button.id == "mod"
    ) {
      op = button.id;
      storeOpr = storeOp(op);
      console.log(storeOpr);
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
    display(storeNum, storeOpr);
  });
  function storeVar(variable) {
    array.push(variable);
    console.log(array);
    return array;
  }
  function storeOp(op) {
    return (operator = op);
  }
});
function display(storeNum, storeOpr) {
  equal_button.addEventListener("click", () => {
    last = operate(storeNum, storeOpr);
    console.log(last);
    span.textContent = last;
  });
}

function operate(storeNum, storeOpr) {
  if (storeOpr == "add") return add(storeNum);

  if (storeOpr == "minus") return minus(storeNum);

  if (storeOpr == "pro") return pro(storeNum);

  if (storeOpr == "mod") return mod(storeNum);

  if (storeOpr == "div") return div(storeNum);
}

function add(storeNum) {
  result = storeNum[0] + storeNum[1];
  return result;
}
function minus(storeNum) {
  result = storeNum[0] - storeNum[1];
  return result;
}
function pro(storeNum) {
  result = storeNum[0] * storeNum[1];
  return result;
}
function div(storeNum) {
  if (storeNum[1] == !0) {
    result = storeNum[0] / storeNum[1];
    return result;
  } else return undefined;
}
function mod(storeNum) {
  result = storeNum[0] % storeNum[1];
  return result;
}

function operate(storeNum, storeOpr) {
  if (storeOpr == "add") return add(storeNum);

  if (storeOpr == "minus") return minus(storeNum);

  if (storeOpr == "pro") return pro(storeNum);

  if (storeOpr == "mod") return mod(storeNum);

  if (storeOpr == "div") return div(storeNum);
}

function add(storeNum) {
  result = storeNum[0] + storeNum[1];
  return result;
}
function minus(storeNum) {
  result = storeNum[0] - storeNum[1];
  return result;
}
function pro(storeNum) {
  result = storeNum[0] * storeNum[1];
  return result;
}
function div(storeNum) {
  if (storeNum[1] == !0) {
    result = storeNum[0] / storeNum[1];
    return result;
  } else return undefined;
}
function mod(storeNum) {
  result = storeNum[0] % storeNum[1];
  return result;
}

function isNumber(character) {
  return /0-9/.test(character);
}
