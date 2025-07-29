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


