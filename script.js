let count = 0;

const countDiv = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Increase
increaseBtn.addEventListener("click", () => {
  count++;
  countDiv.textContent = count;
});

// Decrease
decreaseBtn.addEventListener("click", () => {
  count--;
  countDiv.textContent = count;
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  countDiv.textContent = count;
});