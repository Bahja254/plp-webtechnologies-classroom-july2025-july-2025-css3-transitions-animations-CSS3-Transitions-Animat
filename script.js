// Part 2: Functions with Parameters & Return Values
function addNumbers(a, b) {
  return a + b;
}

// Demonstrating local vs global scope
let globalMessage = "I am global!";

function scopeExample() {
  let localMessage = "I am local!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // only inside this function
}

// Triggered when user clicks "Calculate Sum"
function showSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  // Reuse function
  let sum = addNumbers(num1, num2);

  document.getElementById("result").textContent = Sum = ${sum};
}

// Part 3: Combining CSS + JS
let box = document.getElementById("animateBox");
let btn = document.getElementById("animateBtn");

btn.addEventListener("click", function() {
  box.classList.toggle("animate"); // toggle animation
});