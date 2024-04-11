const form = document.getElementById("taxCalculatorForm");
const grossIncomeInput = document.getElementById("grossIncome");
const extraIncomeInput = document.getElementById("extraIncome");
const ageGroupSelect = document.getElementById("ageGroup");
const deductionsInput = document.getElementById("deductions");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");
const errorIcons = document.querySelectorAll(".errorIcon");

function isNumeric(value) {
  const regex = /^\d+$/
  return regex.test(value);
}

function validateInput(input) {
  const isValid = isNumeric(input.value);
  showErrorIcon(input, !isValid);
  return isValid;
}

function showErrorIcon(input, show) {
  const errorIcon = input.nextElementSibling;
  if (errorIcon && errorIcon.classList.contains("errorIcon")) {
    if (show) {
      const isValid = isNumeric(input.value);
      errorIcon.style.display = isValid ? "none" : "flex";
    } else {
      errorIcon.style.display = "none";
    }
  }
}


function calculateTax(event) {
  event.preventDefault();

  const grossIncome = parseFloat(grossIncomeInput.value) || 0;
  const extraIncome = parseFloat(extraIncomeInput.value) || 0;
  const ageGroup = parseInt(ageGroupSelect.value);
  const deductions = parseFloat(deductionsInput.value) || 0;

  const totalIncome = grossIncome + extraIncome - deductions;

  if (totalIncome <= 800000) {
    resultDiv.textContent = "No tax is applicable.";
    return
  }

  const taxableIncome = totalIncome - 800000
  let taxRate;

  switch (ageGroup) {
    case 1:
      taxRate = 0.3;
      break
    case 2:
      taxRate = 0.4;
      break
    case 3:
      taxRate = 0.1;
      break
    default:
      resultDiv.textContent = "Please select an age group.";
      return
  }

  const tax = taxableIncome * taxRate
  resultDiv.textContent = `Tax payable: ₹${tax.toFixed(2)}`
}

function validateAndCalculate(event) {
  const isGrossIncomeValid = validateInput(grossIncomeInput)
  const isExtraIncomeValid = validateInput(extraIncomeInput)
  const isDeductionsValid = validateInput(deductionsInput)

  if (isGrossIncomeValid && isExtraIncomeValid && isDeductionsValid) {
    calculateTax(event);
  } else {
    resultDiv.textContent = "Please enter valid numbers."
  }
}

form.addEventListener("submit", validateAndCalculate)

calculateBtn.addEventListener("click", validateAndCalculate);

errorIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    const tooltip = icon.dataset.tooltip
    icon.setAttribute("title", tooltip)
  });

  icon.addEventListener("mouseout", () => {
    icon.removeAttribute("title");
  });
});

window.addEventListener('load', () => {
  showErrorIcon(grossIncomeInput, false);
  showErrorIcon(extraIncomeInput, false);
  showErrorIcon(deductionsInput, false);
});