const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const span_button = document.querySelectorAll("span.uniq");
const equal_button = document.querySelector("#equal");
const delete_button = document.querySelector("#del");
const input = document.querySelector(".input");
let array = [];
let arr = [];
let Arr = [];
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
        span.textContent = concat;
        console.log(concat);
        array = [];
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
  equal_button.addEventListener("click", () => {
    // let equal = "=";
    // display(equal);
    if (concat.includes(".")) {
      new_array(parseFloat(concat));
      array = [];
      console.log(array);
    } else {
      array = [];
      new_array(parseInt(concat, 10));
      concat = "";
      console.log(concat);
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
  Arr.push(val);
  console.log(Arr);
  console.log(Arr.length);
  if (Arr.length >= 3) {
    // arr = Arr.filter((val) => val != "=");

    for (let m = 0; m < Arr.length; m++) {
      if (typeof Arr[m] === "number") storeNum.push(Arr[m]);
      if (typeof Arr[m] === "string")
        // if (Arr[m] !== "=") {
        storeOpr.push(Arr[m]);
      // }
    }
    Arr = [];
    console.log(Arr);
    console.log(storeNum);
    console.log(storeOpr);

    let firstOpr = storeOpr.shift();
    console.log(firstOpr);
    console.log(storeOpr);

    result = operate(storeNum, firstOpr);
    storeNum = [];
    firstOpr = [];

    // let return = checkDecimal(result);
    span.textContent = result;
    Arr.push(result);
    console.log(Arr);
    console.log(storeNum);
    console.log(firstOpr);

    if (storeOpr.length > 0) {
      secOpr = storeOpr.shift();
      Arr.push(secOpr);
    }
    console.log(Arr);
  }
}
// function checkDecimal(result){
//   numberOfDecimal = countDecimalPlaces(result);
//   if (numberOfDecimal >= 5) {
//     let fixed = result.toFixed(4);
//     span.textContent = fixed;
//     Arr.unshift(fixed);
//     // console.log(arr);
//   } else if (
//     numberOfDecimal == 0 ||
//     numberOfDecimal == 1 ||
//     numberOfDecimal == 2 ||
//     numberOfDecimal == 3 ||
//     numberOfDecimal == 4
//   ) {
//     span.textContent = result;
//     Arr.unshift(result);
//     // console.log(arr);
//   }
//}

// function countDecimalPlaces(number) {
//   const decimalString = number.toString().split(".")[1];
//   if (decimalString) {
//     return decimalString.length;
//   } else {
//     return 0;
//   }
// }

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
