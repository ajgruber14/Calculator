// This function clears all the values
function clearScreen() {
    document.getElementById("request").value = "";
    document.getElementById("result").value = "";
   }

// This function displays values
function display(value) {
    document.getElementById("request").value += value;
   }

// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("request").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }