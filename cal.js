const result = document.getElementById("display");

function add(input) {
  result.value += input;
}

function calculate() {
  try {
    result.value = eval(result.value).toFixed(2);
  } catch (error) {
    result.value = "error❌";
  }
}

function remove() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}

function pw() {
  const exponentForm = document.getElementById("exponent-form");
  if (exponentForm.style.display === "none") {
    exponentForm.style.display = "flex";
  } else {
    exponentForm.style.display = "none";
  }
}

const exponentInput = document.getElementById("exponent-input");

function me() {
  const exponent = exponentInput.value;
  result.value = Math.pow(result.value, exponent);
}
