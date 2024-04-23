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
let result;
let storeNum,
  storeOpr,
  i,
  n,
  variable,
  firstNum,
  secNum,
  last,
  operator,
  nextIndex,
  Target;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Target = event.target;
    if (
      button.id == "0" ||
      button.id == "1" ||
      button.id == "2" ||
      button.id == "3" ||
      button.id == "4" ||
      button.id == "5" ||
      button.id == "6" ||
      button.id == "7" ||
      button.id == "8" ||
      button.id == "9" ||
      button.id == "minus" ||
      button.id == "add" ||
      button.id == "div" ||
      button.id == "pro" ||
      button.id == "mod" ||
      button.id == "AC" ||
      button.id == "del" ||
      button.id == "equal"
    ) {
      let val = button.id;
      array.push(val);
      firstNum = array[0];
      span.textContent = firstNum;
      console.log(firstNum);
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
          firstNum += array[i];

          span.textContent = firstNum;
          variable = parseInt(firstNum, 10);
          storeNum = storeVar(variable);
          console.log(storeNum);
        } else {
          op = button.id;
          storeOpr = storeOp(op);
          console.log(storeOpr);
        }
      }
    }
    // if (
    //   button.id == "minus" ||
    //   button.id == "add" ||
    //   button.id == "div" ||
    //   button.id == "pro" ||
    //   button.id == "mod"
    // ) {
    //   op = button.id;
    //   storeOpr = storeOp(op);
    //   console.log(storeOpr);
    // }
    if (button.id == "AC") {
      span.textContent = "";
      array = [];
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
  for (let k = 0; k < storeNum.length; k++) {
    result += storeNum[k];
  }
  return result;
}
function minus(storeNum) {
  for (let k = 0; k < storeNum.length; k++) {
    result -= storeNum[k];
  }
  return result;
}
function pro(storeNum) {
  result = 1;
  for (let k = 0; k < storeNum.length; k++) {
    result *= storeNum[k];
  }
  return result;
}
function div(storeNum) {
  result = "";
  for (let k = 0; k < storeNum.length; k++) {
    // if (storeNum[k+1] == !0)
    result /= storeNum[k];
  }
  return result;
  //  else return undefined;
}
function mod(storeNum) {
  for (let k = 0; k < storeNum.length; k++) {
    result %= storeNum[k];
  }
  return result;
}

// function isNumber(character) {
//   return /0-9/.test(character);
// }
