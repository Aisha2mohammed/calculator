const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const span_button = document.querySelectorAll("span.uniq");
const equal_button = document.querySelector("#equal");
const delete_button = document.querySelector("#del");
const input = document.querySelector(".input");
const plus_minus = document.querySelector("#plus_minus");

let array = [];
let arr = [];
let Arr = [];
let storeNum = [];
let storeOpr = [];
let concat = "";
let min = "";
let numberOfDecimal, result, secOpr, Target, last_result;

container.addEventListener("click", (event) => {
  Target = event.target;
  switch (Target.id) {
    case "add":
      span.textContent = "+";
      variable = "add";
      display(variable);
      break;
    case "minus":
      span.textContent = "-";
      variable = "minus";
      display(variable);

      break;
    case "mod":
      span.textContent = "%";
      variable = "mod";
      display(variable);
      break;

    case "pro":
      span.textContent = "*";
      variable = "pro";
      display(variable);
      break;

    case "div":
      span.textContent = "/";
      variable = "div";
      display(variable);
      break;

    case "point":
      variable = ".";
      span.textContent = ".";
      display(variable);
      break;

    case "AC":
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
    case "equal":
      variable = "equal";
      display(variable);
      break;
    case "plus_minus":
      variable = "plus_minus";
      span.textContent = "-";
      display(variable);
  }
});
// plus_minus.addEventListener("click", (event) => {
//   let minus = event.target;
//   let id = minus.id;
//   span.textContent = "-";
//   display(id);
// });

document.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    span.textContent = "1";
    variable = 1;
    display(variable);
  }
  if (e.key === "2") {
    span.textContent = "2";
    variable = 2;
    display(variable);
  }
  if (e.key === "3") {
    span.textContent = "3";
    variable = 3;
    display(variable);
  }
  if (e.key === "4") {
    span.textContent = "4";
    variable = 4;
    display(variable);
  }
  if (e.key === "5") {
    span.textContent = "5";
    variable = 5;
    display(variable);
  }
  if (e.key === "6") {
    span.textContent = "6";
    variable = 6;
    display(variable);
  }
  if (e.key === "7") {
    span.textContent = "7";
    variable = 7;
    display(variable);
  }
  if (e.key === "8") {
    span.textContent = "8";
    variable = 8;
    display(variable);
  }
  if (e.key === "9") {
    span.textContent = "9";
    variable = 9;
    display(variable);
  }
  if (e.key === "0") {
    span.textContent = "0";
    variable = 0;
    display(variable);
  }
  if (e.key === "+") {
    span.textContent = "+";
    variable = "add";
    display(variable);
  }
  if (e.key === "-") {
    span.textContent = "-";
    variable = "minus";
    display(variable);
  }
  if (e.key === "*" && e.shiftKey) {
    span.textContent = "x";
    variable = "pro";
    display(variable);
  }
  if (e.key === "/") {
    span.textContent = "/";
    variable = "div";
    display(variable);
  }
  if (e.key === "%") {
    span.textContent = "%";
    variable = "mod";
    display(variable);
  }
  if (e.key === ".") {
    span.textContent = ".";
    variable = ".";
    display(variable);
  }
  if (e.key === "=") {
    variable = "equal";
    display(variable);
  }
  if (e.key === "Enter") {
    variable = "equal";
    display(variable);
  }
  if (e.key === "Backspace") {
    concat = concat.slice(0, concat.length - 1);
    console.log(concat);
    span.textContent = concat;
  }
  if (e.key === "Enter" && e.shiftKey) {
    array = [];
    location.reload();
  }
});
function display(numbers) {
  array.push(numbers);
  console.log(array);
  // for (let i of array) {
  //   if (i === "plus_minus") {
  //     min = "-";
  //   }
  // }
  for (let i = 0; i < array.length; i++) {
    // if (array[i] == "plus_minus") {
    //   concat = "-";
    // }
    if (array[i] === "plus_minus") {
      // concat = "-";
      min = "-";
    }
    if (typeof array[i] === "number" || array[i] === ".") {
      concat = min;

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
      min = "";
    } else if (typeof array[i] === "string") {
      if (array[i] === "equal") {
        if (concat !== "") {
          new_array(
            concat.includes(".") ? parseFloat(concat) : parseInt(concat)
          );
          concat = "";
        }
        new_array(array[i]); // Add the operator
      } else {
        if (concat !== "") {
          new_array(
            concat.includes(".") ? parseFloat(concat) : parseInt(concat)
          );
          concat = "";
        }

        new_array(array[i]); // Add the operator
      }
    }

    array = [];
    console.log(array);
  }
}

delete_button.addEventListener("click", () => {
  console.log(concat);
  concat = concat.slice(0, concat.length - 1);
  console.log(concat);
  span.textContent = concat;
});

function new_array(val) {
  Arr.push(val);
  for (let a of Arr) {
    if (a == "plus_minus") Arr.pop();
  }
  console.log(Arr);

  // console.log(Arr);
  // if (Arr.length == 1) {
  //   for (let k of Arr) {
  //     if (typeof k !== "number") Arr.pop();
  //   }
  // }
  if (Arr.length > 3) {
    for (let m = 0; m < Arr.length; m++) {
      if (typeof Arr[m] === "number") storeNum.push(Arr[m]);
      if (typeof Arr[m] === "string")
        if (Arr[m] == "equal") Arr.pop();
        else storeOpr.push(Arr[m]);
    }
    Arr = [];
    console.log(Arr);
    console.log(storeNum);
    console.log(storeOpr);

    // if (storeOpr.length > 1) {
    //   storeOpr.pop();
    //   console.log(storeOpr);

    //   secOpr = storeOpr.shift();
    //   console.log(storeOpr);

    //   // Arr.push(secOpr);
    // }
    let firstOpr = storeOpr.pop();
    console.log(firstOpr);
    console.log(storeOpr);

    if (storeNum.length == 2) {
      result = operate(storeNum, firstOpr);
      console.log(result);

      storeNum = [];
      firstOpr = [];

      last_result = checkDecimal(result);
      span.textContent = last_result;
      Arr.push(last_result);
      console.log(Arr);
      console.log(storeNum);
      console.log(firstOpr);
    }
  }
}

function checkDecimal(result) {
  numberOfDecimal = countDecimalPlaces(result);
  console.log(numberOfDecimal);
  if (numberOfDecimal >= 5) {
    let fixed = result.toFixed(4);
    console.log(fixed);
    let number_of_decimal = countDecimalPlaces(fixed);
    for (let i = 1; i <= number_of_decimal; i++) {
      let fixedArray = fixed.split("");
      console.log(fixedArray);
    }
    return fixed;
  } else if (numberOfDecimal == 3 || numberOfDecimal == 4) {
    let fixed = result.toFixed(3);
    console.log(fixed);
    return fixed;
  } else if (
    numberOfDecimal == 0 ||
    numberOfDecimal == 1 ||
    numberOfDecimal == 2
  ) {
    console.log(result);
    return result;
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

function operate(storeNum, newOpr) {
  const [num1, num2] = storeNum;

  console.log(storeNum);
  console.log(newOpr);

  switch (newOpr) {
    case "add":
    case "+":
      return num1 + num2;
    case "minus":
    case "-":
      return num1 - num2;
    case "pro":
    case "*":
      return num1 * num2;
    case "div":
    case "/":
      return num1 / num2;
    case "mod":
    case "%":
      return num1 % num2;
  }
}
