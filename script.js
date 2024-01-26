function display(val) {
   var v = document.getElementById('output-screen');
   v.value += val;
}
function calculate() {
   var num1 = document.getElementById('output-screen').value;
   var num2 = eval(num1);
   document.getElementById('output-screen').value = num2;
}
function Clear() {
   var inp = document.getElementById('output-screen');
   inp.value = '';
}
function del() {
   var ev = document.getElementById('output-screen');
   ev.value = ev.value.slice(0,-1);
}
