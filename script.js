const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const span = document.querySelector(".span1");
const span_button = document.querySelectorAll("span.uniq");
const equal_button = document.querySelector("#equal");
let arr = [];
let storeNum = [];
let storeOpr = [];
let array = [];
let parsedArr = [];
let newArray = [];
let last = [];
let firstNum = [];
let op = [];
let a = [];
let ar = [];
let concat, store;
let join = "";
let result, firstOpr, operator, newOp, reduce, variable, secNum, Target;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    Target = button.id;
    display(Target);
  });
});
span_button.forEach((span) => {
  span.addEventListener("click", () => {
    Target = span.id;
    number = parseInt(Target, 10);
    display(number);
  });
});

function display(value) {
  array.push(value);

  console.log(array);
  concat = array[0].toString();
  span.textContent = concat;
  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] === "number") {
      concat += array[i].toString();
      span.textContent = concat;
      console.log(concat);
    } else {
      store.push(parseInt(concat, 10));
      concat = "";
      store.push(array[i]);
      console.log(store);
      for (let k of store) {
        if (!a.includes(k)) {
          a.push(k);
        }
      }
      console.log(a);
      if (a.length >= 2) {
        firstOpr = a.shift();
        Array = store.splice(0, 3);
        firstNum = new_array(Array);
        console.log(firstOpr);
        console.log(Array);
        console.log(firstNum);

        result = operate(firstNum, firstOpr);
      }
    }

    function new_array(Array) {
      console.log(Array);
      console.log(Array.length);

      let join = array[0].toString();
      for (let k = 1; k < Array.length; k++) {
        if (typeof Array[k] === "number") {
          join += Array[k].toString();
        }
        if (typeof array[k] === "string") {
          storeNum.push(parseInt(join, 10));
          console.log(storeNum);

          join = "";
          op = array[k];
          console.log(op);

          // continue;
        }
      }
      storeNum.push(parseInt(join, 10));
      console.log(storeNum);
      return storeNum;
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
  }

  store.push(parseInt(concat, 10));
}
