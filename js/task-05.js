const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
    return event.currentTarget.value
      ? (outputEl.textContent = event.currentTarget.value)
      : (outputEl.textContent = "Anonymous");
});


    
