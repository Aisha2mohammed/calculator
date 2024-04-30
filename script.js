const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const equal_button = document.querySelector("#equal");

let array = [];
let last = [];
let storeNum = [];
let storeOpr = [];
let newArray = [];
let op = [];
let concat;
let arr = [];
let a = [];
let join = "";
let result,
  firstOpr,
  operator,
  newOp,
  reduce,
  variable,
  firstNum,
  secNum,
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

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     let val = button.id;
//     if (
//       val == "1" ||
//       val == "2" ||
//       val == "3" ||
//       val == "4" ||
//       val == "5" ||
//       val == "6" ||
//       val == "7" ||
//       val == "8" ||
//       val == "9"
//     ) {
//       span.textContent = val;
//       display(val);
//     }
//     if (
//       val == "1" ||
//       val == "2" ||
//       val == "3" ||
//       val == "4" ||
//       val == "5" ||
//       val == "6" ||
//       val == "7" ||
//       val == "8" ||
//       val == "9"
//     ) {
//       display(val);
//     }
//   });
// });

function display(numbers) {
  array.push(numbers);
  console.log(array);
  concat = array[0].toString();
  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] === "number") {
      concat += array[i].toString();
      span.textContent = concat;
      console.log(concat);
    } else {
      concat = "";
      op.push(array[i]);
      console.log(op);
      for (let val of op) {
        if (!a.includes(val)) {
          a.push(val);
        }
      }
      console.log(a);
      console.log(a.length);

      if (a.length >= 2) {
        // console.log(new_array(array));
        let [storeNum, storeOpr] = new_array(array);
        let first_result = operate(storeNum, storeOpr);
        span.textContent = first_result;
        console.log(first_result);
        return first_result;
      }
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let [storeNum, storeOpr] = new_array(array);

      last_result = operate(storeNum, storeOpr);
      console.log(last_result);
      span.textContent = last_result;
      return last_result;
    });
  });
}

function operate(storeNum, newOpr) {
  if (newOpr === "add") {
    return storeNum[0] + storeNum[1];
  }
  if (newOpr === "minus") {
    return storeNum[0] - storeNum[1];
  }
  if (newOpr === "pro") {
    return storeNum[0] * storeNum[1];
  }
  if (newOpr === "mod") {
    return storeNum[0] % storeNum[1];
  }
  if (newOpr === "div") {
    return storeNum[0] / storeNum[1];
  }
  return result;
}

function new_array(array) {
  let join = array[0].toString();
  for (let k = 1; k < array.length; k++) {
    if (typeof array[k] === "number") {
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
  let ar = [];
  last.push(name);
  console.log(last.length);
  console.log(last);
  for (let mul of last) {
    if (!ar.includes(mul)) {
      ar.push(mul);
    }
  }
  if (ar.length > 2) {
    firstOpr = ar.shift();
    console.log(firstOpr);

    // result = operate(storeNum, firstOpr);
    // span.textContent = result;
    // console.log(result);
    // storeVar(result);
    console.log(ar);
    return firstOpr;
  } else console.log(ar);
  return ar;
}
