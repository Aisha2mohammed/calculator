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
      storeNum = storeVar(variable);
      display(storeNum);
    }
    if (
      button.id == "minus" ||
      button.id == "add" ||
      button.id == "div" ||
      button.id == "pro" ||
      button.id == "mod"
    ) {
      operator = button.id;
      storeOpr = storeOp(op);
      display(storeOpr);
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
  function storeVar(variable) {
    return array.push(variable);
  }
  function storeOp(op) {
    return (operator = op);
  }
});
function display(storeNum, storeOpr) {
  equal_button.addEventListener("click", () => operate(storeNum, storeOpr));
  // array.push(numbers);
  // console.log(array);
  // m = array[0].toString();
  // span.textContent = m;
  // console.log(m);

  // for (let k = 1; k < array.length; k++) {
  //   // while(array.length % 3 ==0)
  //   if (typeof array[k] === "number") {

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

function operate(storeNum, storeOpr) {
  if (storeOpr == "add") add(storeNum);

  if (storeOpr == "minus") minus(storeNum);

  if (storeOpr == "pro") pro(storeNum);

  if (storeOpr == "mod") mod(storeNum);

  if (storeOpr == "div") div(storeNum);
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

// function isNumber(character) {
//   return /0-9/.test(character);
// }
