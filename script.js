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
  //   for (let i = 0; i < array.length / 3; i++) {
  //     for (let j = 0; j < array.length; i++) {
  //       firstNum = array[0];
  //       operator = array[1];
  //       secNum = array[2];
  //     }

  //     result = operate(firstNum, operator, secNum);
  //     console.log(result);
  //     span.textContent = result;

  //     if (array.length > 0) array.unshift(result);
  //     else span.textContent = result;
  //   }
  // }

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
  function storeVar(variable) {
    array.push(variable);
    console.log(array);
    arr = parseInt(array, 10);
    return arr;
  }
  function storeOp(op) {
    return (operator = op);
  }
  //Listening to display the result
  equal_button.addEventListener("click", function () {
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
// function operate(storeOpr, storeNum) {
//   if (operator == "add") return add(val, f1);

//   if (operator == "minus") return minus(val, f1);

//   if (operator == "pro") return pro(val, f1);

//   if (operator == "mod") return mod(val, f1);

//   if (operator == "div") return div(val, f1);
// }

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
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     let val = button.id;
//     // span.textContent = val;
//     array.push(val);
//     console.log(array);

//     for (let i = 0; i < array.length; i++) {
//       arr = parseInt(array[i], 10);
//       console.log(arr);
//       if (typeof arr === "number") {
//         let half = arr.toString();
//         concat += half;
//         span.textContent = concat;
//         console.log(concat);
//         storeVar(concat);
//       } else {
//         op = arr[i];
//         storeOp(operator);
//       }
//     }

//   span.textContent = concat;

//   console.log(concat);
//   console.log(arr);
//   storeVar(concat);
//   storeOp(arr);
// }
// for (let i = 0; i < array.length; i++) {
// while(typeof arra) }

//     firstNum = array[0];
//     span.textContent = firstNum;
//     console.log(firstNum);
//     if (array.length > 3) {
//       for (let i = 1; i < array.length; i++) {
//         if (!isNaN(parseInt(array[i]))) {
//           firstNum += array[i];
//           console.log(firstNum);

//           span.textContent = firstNum;
//           variable = parseInt(firstNum, 10);
//           storeNum = storeVar(variable);
//           console.log(storeNum);
//         } else {
//           if (button.id == "equal") {
//             equal_button.addEventListener("click", () => {
//               last = operate(storeNum, storeOpr);
//               console.log(last);
//               span.textContent = last;
//             });
//           } else if (button.id == "AC") {
//             span.textContent = "";
//             array = [];
//           } else {
//             op = button.id;
//             storeOpr = storeOp(op);
//             console.log(storeOpr);
//           }
//         }
//       }
//     } else {
//       if (
//         !(
//           button.id == "minus" ||
//           button.id == "add" ||
//           button.id == "div" ||
//           button.id == "pro" ||
//           button.id == "mod" ||
//           button.id == "AC" ||
//           button.id == "equal"
//         )
//       ) {
//         firstNum = button.id;
//         span.textContent = firstNum;
//         variable = parseInt(firstNum, 10);
//         storeNum = storeVar(variable);
//         console.log(storeNum);
//       }

//       if (
//         (!(button.id == "equal") && button.id == "minus") ||
//         button.id == "add" ||
//         button.id == "div" ||
//         button.id == "pro" ||
//         button.id == "mod"
//       ) {
//         op = button.id;
//         storeOpr = storeOp(op);
//         console.log(storeOpr);
//       }
//       if (button.id == "AC") {
//         span.textContent = "";
//         array = [];
//       }
//     }
//     //  else if (button.id == "point") {
//     //   let val = button.id;
//     //   variable = parseInt(val, 10);
//     //   span.textContent = variable;
//     //   display(variable);
//     // }
//     display(storeNum, storeOpr);
////////////2)}:
// function display(storeNum, storeOpr) {
//   equal_button.addEventListener("click", () => {
//     last = operate(storeNum, storeOpr);
//     console.log(last);
//     span.textContent = last;
//   });
// }

// function operate(storeNum, storeOpr) {
//   if (storeOpr == "add") return add(storeNum);

//   if (storeOpr == "minus") return minus(storeNum);

//   if (storeOpr == "pro") return pro(storeNum);

//   if (storeOpr == "mod") return mod(storeNum);

//   if (storeOpr == "div") return div(storeNum);
// }

// function add(storeNum) {
//   result = storeNum[0] + storeNum[1];
//   return result;
// }
// function minus(storeNum) {
//   result = storeNum[0] - storeNum[1];
//   return result;
// }
// function pro(storeNum) {
//   result = storeNum[0] * storeNum[1];
//   return result;
// }
// function div(storeNum) {
//   if (storeNum[1] == !0) {
//     result = storeNum[0] / storeNum[1];
//     return result;
//   } else return undefined;
// }
// function mod(storeNum) {
//   result = storeNum[0] % storeNum[1];
//   return result;
// }

// function operate(storeNum, storeOpr) {
//   if (storeOpr == "add") return add(storeNum);

//   if (storeOpr == "minus") return minus(storeNum);

//   if (storeOpr == "pro") return pro(storeNum);

//   if (storeOpr == "mod") return mod(storeNum);

//   if (storeOpr == "div") return div(storeNum);
// }

// function add(storeNum) {
//   for (let k = 0; k < storeNum.length; k++) {
//     result += storeNum[k];
//   }
//   return result;
// }
// function minus(storeNum) {
//   for (let k = 0; k < storeNum.length; k++) {
//     result -= storeNum[k];
//   }
//   return result;
// }
// function pro(storeNum) {
//   result = 1;
//   for (let k = 0; k < storeNum.length; k++) {
//     result *= storeNum[k];
//   }
//   return result;
// }
// function div(storeNum) {
//   result = "";
//   for (let k = 0; k < storeNum.length; k++) {
//     // if (storeNum[k+1] == !0)
//     result /= storeNum[k];
//   }
//   return result;
//   //  else return undefined;
// }
// function mod(storeNum) {
//   for (let k = 0; k < storeNum.length; k++) {
//     result %= storeNum[k];
//   }
//   return result;
// }

function isNumber(character) {
  return /0-9/.test(character);
}
