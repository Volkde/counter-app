const counterValue = document.getElementById("counter-value");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let count = 0;

function increment() {
  count++;
  counterValue.textContent = count;
}

function decrement() {
  count--;
  counterValue.textContent = count;
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
