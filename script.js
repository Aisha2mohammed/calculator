const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const span_button = document.querySelectorAll("span.uniq");
const equal_button = document.querySelector("#equal");
const delete_button = document.querySelector("#del");
const input = document.querySelector(".input");
let array = [];
let Array = [];
let storeNum = [];
let storeOpr = [];
let concat = "";
let concatin, numberOfDecimal, result, secOpr, Target, split;
let join = "";
// input.addEventListener("keydown", (event) => {
//   num = event.key;
//   console.log(num);
//   switch (num) {
//     case "1":
//       variable = 1;
//       display(variable);
//       break;

//     case "2":
//       variable = 2;
//       display(variable);
//       break;
//     case "3":
//       variable = 3;
//       display(variable);
//       break;
//     case "4":
//       variable = 4;
//       display(variable);
//       break;
//     case "5":
//       variable = 5;
//       display(variable);
//       break;
//     case "6":
//       variable = 6;
//       display(variable);
//       break;
//     case "7":
//       variable = 7;
//       display(variable);
//       break;

//     case "8":
//       variable = 8;
//       display(variable);
//       break;
//     case "9":
//       variable = 9;
//       display(variable);
//       break;
//     case "0":
//       variable = 0;
//       display(variable);
//       break;
//     case "+":
//       variable = "add";
//       display(variable);
//       break;
//     case "-":
//       variable = "minus";
//       display(variable);

//       break;
//     case "%":
//       variable = "mod";
//       display(variable);
//       break;

//     case "*":
//       variable = "pro";
//       display(variable);

//       break;
//     case "/":
//       variable = "div";
//       display(variable);
//     case "=":
//       variable = "=";
//       display(variable);
//       break;
//     case ".":
//       variable = ".";
//       display(variable);
//       break;
//   }
// });
container.addEventListener("click", (event) => {
  Target = event.target;
  switch (Target.id) {
    // case "equal":
    //   variable = "=";
    //   display(variable);
    // break;
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

function display(numbers) {
  array.push(numbers);
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" || array[i] === ".") {
      if (array[i] === ".") {
        if (!concat.includes(".")) {
          if (concat.length > 0) {
            concat += array[i];
            array = [];
            span.textContent = concat;
          }
          if (concat === "") {
            concat = "0";
            concat += array[i];
            array = [];
            span.textContent = concat;
          }
        }
        if (concat.includes(".")) {
          array = [];
          span.textContent = concat;
        }
      } else {
        concat += array[i].toString();
        console.log(concat);
        array = [];
        span.textContent = concat;
      }
    } else if (typeof array[i] === "string") {
      concat.includes(".")
        ? new_array(parseFloat(concat))
        : new_array(parseInt(concat));
      concat = "";
      let opr = array[i];
      console.log(opr);
      new_array(opr);

      array = [];
      console.log(array);
    }
  }
  // if (array.includes("=")) {
  //   array.pop();
  //   // array[i].addEventListener("click", () => {
  //   if (concat.includes(".")) {
  //     console.log(concat);
  //     new_array(parseFloat(concat));
  //     array = [];
  //     console.log(concat);
  //   } else {
  //     new_array(parseInt(concat, 10));
  //     // concat = "";
  //     array = [];
  //     console.log(concat);
  //   }
  //   // });
  // }
  equal_button.addEventListener("click", () => {
    if (concat.includes(".")) {
      new_array(parseFloat(concat));
      array = [];
      console.log(array);
    } else {
      new_array(parseInt(concat, 10));
      // concat = "";
      array = [];
      console.log(concat);
      // array = [];

      // Convert `concat` to float if it includes a decimal point
      // Clear the array and set the result in the display
    }
  });
}

// }
//  if (num === "=") {
//   num.addEventListener("keydown", () => {
//     if (concat.includes(".")) {
//       console.log(concat);
//       new_array(parseFloat(concat));
//       array = [];
//       console.log(concat);
//     } else {
//       let some = concat;
//       new_array(parseInt(some, 10));
//       // concat = "";

//       array = [];

//       console.log(concat);
//     }
//   });
// }
delete_button.addEventListener("click", () => {
  console.log(concat);
  concat = concat.slice(0, concat.length - 1);
  console.log(concat);
  span.textContent = concat;
});

// if (num === "Backspace") {
//   console.log(concat);
//   concat = concat.slice(0, concat.length - 1);
//   console.log(concat);
//   span.textContent = concat;
//}
function new_array(val) {
  Array.push(val);
  console.log(Array);
  console.log(Array.length);
  if (Array.length == 3) {
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
      Array.slice(1, Array.length - 1);

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
  const [num1, num2] = storeNum;

  console.log(storeNum);
  console.log(newOpr);

  switch (newOpr) {
    case "add":
      return num1 + num2;
    case "minus":
      return num1 - num2;
    case "pro":
      return num1 * num2;
    case "div":
      return num1 / num2;
    case "mod":
      return num1 % num2;
  }
}
