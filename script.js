const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const span_button = document.querySelectorAll("span.uniq");
const equal_button = document.querySelector("#equal");
const delete_button = document.querySelector("#del");
let Array = [];
let array = [];
let storeOpr = [];
let storeNum = [];
let concat, lol, result, Target, opr, split;
let join = "";
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

  concat = array[0].toString();
  span.textContent = concat;
  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] === "number" || array[i] === ".") {
      concat += array[i].toString();
      span.textContent = concat;
    } else if (typeof array[i] === "string") {
      concat.includes(".")
        ? new_array(parseFloat(concat))
        : new_array(parseInt(concat, 10));
      // Convert `concat` to float if it includes a decimal point
      console.log(array);
      // let previousElement = array[i - 1];
      // if (
      //   typeof previousElement === "string" &&
      //   isNaN(parseInt(previousElement))
      // ) {

      opr = array[i];
      console.log(opr);
      new_array(opr);
      array = [];
    }

    delete_button.addEventListener("click", () => {
      array.pop();
      span.textContent = array.join("");
    });

    equal_button.addEventListener("click", () => {
      concat.includes(".")
        ? new_array(parseFloat(concat))
        : new_array(parseInt(concat, 10));
      // Convert `concat` to float if it includes a decimal point
      console.log(result);
      // Clear the array and set the result in the display

      array = [];
      array.push(result);
      span.textContent = result;
      console.log(array);
    });
  }
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
  console.log(result);
  return result;
}

function new_array(val) {
  Array.push(val);

  console.log(Array);
  console.log(Array.length);
  if (Array.length == 4) {
    for (let m = 0; m < Array.length; m++) {
      if (typeof Array[m] === "number") storeNum.push(Array[m]);
      if (typeof Array[m] === "string") storeOpr.push(Array[m]);
    }
    console.log(storeNum);
    console.log(storeOpr);

    let firstOpr = storeOpr.shift();
    console.log(firstOpr);
    Array = [];
    console.log(storeOpr);
    let secOpr = storeOpr.shift();
    Array.unshift(secOpr);
    console.log(Array);

    result = operate(storeNum, firstOpr);
    storeNum = [];
    span.textContent = result;
    Array.unshift(result);
    console.log(Array);
  }
}
