const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value); 
    });

}

function validateForm() {
    if (inputs.foreach(input => {
        if (input.value.trim() === '') {
            alert("error")
        }
    }))

  return valid;
}

