const span = document.querySelector("#value");
let counterValue = 0;
const btnDerement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};
btnDerement.addEventListener("click", decrement);

const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
};
btnIncrement.addEventListener("click", increment);
