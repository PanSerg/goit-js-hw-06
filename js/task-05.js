const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
  return event.currentTarget.value.trim()
      ? (outputEl.textContent = event.currentTarget.value)
      : (outputEl.textContent = "Anonymous");
});


    
