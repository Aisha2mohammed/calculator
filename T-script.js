const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const span_button = document.querySelectorAll("span.uniq");
const equal_button = document.querySelector("#equal");
let arr = [];
let [op, store] = [[], []];
let storeNum = [];
let storeOpr = [];
let array = [];
let parsedArr = [];
let newArray = [];
let last = [];
let firstNum = [];
let a = [];
let ar = [];
let concat;
let join = "";
let result, firstOpr, operator, newOp, reduce, variable, secNum, Target;
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
  span.textContent = concat;
  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] === "number") {
      concat += array[i].toString();
      span.textContent = concat;
      console.log(concat);
    } else {
      new_array(concat);
      concat = "";
      op = array[i];
      new_array(op);
    }
  }
  console.log(concat);
  // array.slice(-1);
  // new_array(concat);

  equal_button.addEventListener("click", function () {
    let [storeNum, storeOpr] = new_array(array);

    last_result = operate(storeNum, storeOpr);
    console.log(last_result);
    span.textContent = last_result;
    return last_result;
  });
}
function operate(storeNum, newOpr) {
  if (newOpr === "add") {
    result = storeNum[0] + storeNum[1];
  }
  if (newOpr === "minus") {
    result = storeNum[0] - storeNum[1];
  }
  if (newOpr === "pro") {
    result = storeNum[0] * storeNum[1];
  }
  if (newOpr === "mod") {
    result = storeNum[0] % storeNum[1];
  }
  if (newOpr === "div") {
    result = storeNum[0] / storeNum[1];
  }
  span.textContent = result;
  console.log(result);
  return result;
}

function new_array(array) {
  console.log(array);
  console.log(array.length);

  let join = array[0].toString();
  for (let k = 1; k < array.length; k++) {
    if (typeof array[k] === "number") {
      join += array[k].toString();
    }
    if (typeof array[k] === "string") {
      storeNum.push(parseInt(join));
      join = "";
      operator = array[k];
      console.log(operator);
      storeOpr.push(operator);
    }
  }
  // storeNumstoreVar(join);
  storeNum.push(parseInt(join));
  console.log(storeOpr);
  console.log(storeNum);
  return [storeNum, storeOpr];
}
// function storeVar(variable) {
//   // console.log(variable);

//   arr.push(variable);
//   console.log(arr);
//   // let parsedArr = arr.map((el) => parseInt(el, 10));
//   let k = parseInt(variable, 10);
//   console.log(k);
//   return k;
// }

// function storeOp(name, storeNum) {
//   last.push(name);
//   console.log(last.length);
//   console.log(last);
//   for (let mul of last) {
//     if (!ar.includes(mul)) {
//       ar.push(mul);
//     }
//   }
// }
// if (ar.length >= 2) {
//   firstOpr = ar.shift();
//   console.log(firstOpr);

//   result = operate(firstOpr, storeNum);
//   span.textContent = result;
//   console.log(result);
//   span.textContent = result;
//   storeVar(result);
//   console.log(ar);
//   return ar;
// } else console.log(ar);
// return ar;
