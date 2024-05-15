const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const span_button = document.querySelectorAll("span.uniq");
const equal_button = document.querySelector("#equal");
const delete_button = document.querySelector("#del");
const input = document.querySelector(".input");
let array = [];
let Array = [];
const arr = [];

// let storeOpr = [];
// let storeNum = [];
let concat = "";
let concatin, numberOfDecimal, result, secOpr, Target, split;
let join = "";
input.addEventListener("keydown", (event) => {
  let num = event.key;
  console.log(num);
  switch (num) {
    case "1":
      variable = 1;
      display(variable);
      break;

    case "2":
      variable = 2;
      display(variable);
      break;
    case "3":
      variable = 3;
      display(variable);
      break;
    case "4":
      variable = 4;
      display(variable);
      break;
    case "5":
      variable = 5;
      display(variable);
      break;
    case "6":
      variable = 6;
      display(variable);
      break;
    case "7":
      variable = 7;
      display(variable);
      break;

    case "8":
      variable = 8;
      display(variable);
      break;
    case "9":
      variable = 9;
      display(variable);
      break;
    case "0":
      variable = 0;
      display(variable);
      break;
    case "+":
      variable = "add";
      display(variable);
      break;
    case "-":
      variable = "minus";
      display(variable);

      break;
    case "%":
      variable = "mod";
      display(variable);
      break;

    case "*":
      variable = "pro";
      display(variable);

      break;
    case "/":
      variable = "div";
      display(variable);
      break;
    case ".":
      variable = ".";
      span.textContent = ".";
      display(variable);
      break;
    default:
      variable = "";
      span.textContent = variable;
  }
});
container.addEventListener("click", (event) => {
  Target = event.target;
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
    case "point":
      variable = ".";
      span.textContent = ".";
      display(variable);
      break;
    case "AC":
      span.textContent = "0";
      array = [];
      location.reload();
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

// function display2(num) {
// if (
//   num === "1" ||
//   num === "2" ||
//   num === "3" ||
//   num === "4" ||
//   num === "5" ||
//   num === "6" ||
//   num === "7" ||
//   num === "9"
// ) {
//   let k = num;
//   console.log(num);
//   let last = Number(k);
//   num = last;
// }
// arr.push(num);
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number" || arr[i] === ".") {
//     // if (array[0] == ".") {
//     //   let zero = "0";
//     //   concat = zero + array[0];
//     //   array = [];
//     //   span.textContent = concat;
//     // }
//     // else {
//     console.log(concat);
//     if (arr[i] === ".") {
//       if (!concat.includes(".")) {
//         concat += arr[i].toString();
//         console.log(concat);
//         arr = [];
//         // span.textContent = concat;
//         console.log(arr);
//       } else {
//         concat += arr[i].toString();
//         console.log(concat);
//         arr = [];
//         span.textContent = concat;
//       }
//     }
//     } else {
//       concat.includes(".")
//         ? new_array(parseFloat(concat))
//         : new_array(parseInt(concat, 10));
//       // Convert `concat` to float if it includes a decimal point

//       console.log(arr);
//       concat = "";
//       let opr = arr[i];
//       console.log(opr);
//       console.log(arr[i]);
//       console.log(arr);
//       new_array(opr);

//       arr = [];
//       console.log(arr);
//     }

// }
function display(numbers) {
  array.push(numbers);
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" || array[i] === ".") {
      // if (array[0] == ".") {
      //   let zero = "0";
      //   concat = zero + array[0];
      //   array = [];
      //   span.textContent = concat;
      // }
      // else {
      console.log(concat);
      if (array[i] === ".") {
        if (!concat.includes(".")) {
          concat += array[i].toString();
          console.log(concat);
          array = [];
          span.textContent = concat;
        } else {
          concat += array[i].toString();
          console.log(concat);
          array = [];
          span.textContent = concat;
        }
      }
    } else {
      concat.includes(".")
        ? new_array(parseFloat(concat))
        : new_array(parseInt(concat, 10));
      // Convert `concat` to float if it includes a decimal point

      console.log(array);
      concat = "";
      let opr = array[i];
      console.log(opr);
      console.log(array[i]);
      console.log(array);
      new_array(opr);

      array = [];
      console.log(array);
    }
  }
  equal_button.addEventListener("click", () => {
    if (concat.includes(".")) {
      console.log(concat);
      new_array(parseFloat(concat));
      array = [];
      console.log(concat);
    } else {
      let some = concat;
      new_array(parseInt(some, 10));
      // concat = "";

      array = [];

      console.log(concat);
      // array = [];

      // Convert `concat` to float if it includes a decimal point
      // Clear the array and set the result in the display
    }
  });
}

delete_button.addEventListener("click", () => {
  console.log(concat);
  concat = concat.slice(0, concat.length - 1);
  console.log(concat);
  span.textContent = concat;
});

function new_array(val) {
  Array.push(val);
  console.log(Array);
  console.log(Array.length);
  if (Array.length >= 4) {
    storeNum = [];
    storeOpr = [];
    for (let m = 0; m < Array.length; m++) {
      if (typeof Array[m] === "number") storeNum.push(Array[m]);
      if (typeof Array[m] === "string") storeOpr.push(Array[m]);
    }
    Array = [];
    console.log(Array);
    console.log(storeNum);
    console.log(storeOpr);

    let firstOpr = storeOpr.shift();
    console.log(firstOpr);
    console.log(storeOpr);

    result = operate(storeNum, firstOpr);
    storeNum = [];
    firstOpr = [];
    if (storeOpr.length > 0) {
      secOpr = storeOpr.shift();
      Array.unshift(secOpr);
    }
    numberOfDecimal = countDecimalPlaces(result);
    if (numberOfDecimal >= 5) {
      let fixed = result.toFixed(4);
      span.textContent = fixed;
      Array.unshift(fixed);
      console.log(Array);
    } else if (
      numberOfDecimal == 0 ||
      numberOfDecimal == 1 ||
      numberOfDecimal == 2 ||
      numberOfDecimal == 3 ||
      numberOfDecimal == 4
    ) {
      span.textContent = result;
      Array.unshift(result);
      Array.slice(1, Array.length);

      console.log(Array);
    }
  }

  function countDecimalPlaces(number) {
    const decimalString = number.toString().split(".")[1];
    if (decimalString) {
      return decimalString.length;
    } else {
      return 0;
    }
  }
}
function operate(storeNum, newOpr) {
  console.log(storeNum);
  console.log(newOpr);

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
    if (storeNum[1] !== 0) result = storeNum[0] / storeNum[1];
    else {
      span.textContent = "Undefined";
      result = undefined;
    }
  }
  console.log(result);
  return result;
}
