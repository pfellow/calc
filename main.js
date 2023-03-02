const updateResult = () => {
  document.querySelector(".input-result-numbers").innerHTML = inputResult;
};

let inputResult = "0";

let numberInMemory = "";
let operationSymbol = "";

const digits = document.querySelectorAll(".btn-dig");

for (let i of digits) {
  i.addEventListener("click", () => {
    if (inputResult === "0") {
      inputResult = i.innerHTML;
    } else {
      inputResult += i.innerHTML;
    }
    updateResult();
  });
}

document.querySelector(".btn-c").addEventListener("click", () => {
  inputResult = "0";
  updateResult();
});

document.querySelector(".btn-back").addEventListener("click", () => {
  if (typeof inputResult === "string") {
    if (inputResult.length === 1) {
      inputResult = "0";
    } else {
      inputResult = inputResult.substring(0, inputResult.length - 1);
    }
    updateResult();
  }
});

const operations = document.querySelectorAll(".btn-last");

for (let operation of operations) {
  operation.addEventListener("click", () => {
    if (numberInMemory !== "") {
      performOperation();
    }
    numberInMemory = inputResult;
    operationSymbol = operation.innerHTML;
    inputResult = "0";
    updateResult();
  });
}

document.querySelector(".btn-equal").addEventListener("click", () => {
  if (numberInMemory !== "") {
    performOperation();
  }
  numberInMemory = "";
  operationSymbol = "";
  updateResult();
});

const performOperation = () => {
  if (numberInMemory !== "") {
    switch (operationSymbol) {
      case "÷":
        inputResult = Number(numberInMemory) / Number(inputResult);
        break;
      case "×":
        inputResult = Number(numberInMemory) * Number(inputResult);
        break;
      case "+":
        inputResult = Number(numberInMemory) + Number(inputResult);
        break;
      case "-":
        inputResult = Number(numberInMemory) - Number(inputResult);
        break;
      default:
        console.log("Something went wrong");
    }
  }
};
