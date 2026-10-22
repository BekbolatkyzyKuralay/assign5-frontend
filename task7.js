const numberA = document.getElementById("numberA");
const numberB = document.getElementById("numberB");
const calculatorResult = document.getElementById("calculatorResult");

document.querySelectorAll("[data-operation]").forEach(function (button) {
  button.addEventListener("click", function () {
    if (numberA.value === "" || numberB.value === "") {
      calculatorResult.textContent = "Please enter both numbers.";
      return;
    }

    const a = Number(numberA.value);
    const b = Number(numberB.value);
    let result;

    switch (button.dataset.operation) {
      case "add": result = a + b; break;
      case "subtract": result = a - b; break;
      case "multiply": result = a * b; break;
      case "divide":
        if (b === 0) {
          calculatorResult.textContent = "Cannot divide by zero.";
          return;
        }
        result = a / b;
        break;
    }

    calculatorResult.textContent = "Result: " + result;
  });
});