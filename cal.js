const result = document.getElementById("display");
  let allowed = [0,1,2,3,4,5,6,7,8,9,"+","-","/","*","."]
document.addEventListener("keypress",function(e){
  if(allowed.some(el=>parseInt(e.key)===el) || allowed.some(el=>e.key===el)){
add(e.key)
  }
})
document.addEventListener("keydown",function(e){
 if(e.key==="Backspace"){
del()
 }
 else if(e.key==="Enter"){
  calculate()
 }
 else if(e.key==="Delete"){
  remove()
 }
})
function add(input) {
  result.value += input;
}

function calculate() {
  try {
    result.value = eval(result.value)-Math.floor(eval(result.value))!==0?eval(result.value).toFixed(2):eval(result.value);
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


