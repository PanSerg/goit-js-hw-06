const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

    const email = event.currentTarget.email;
    const password = event.currentTarget.password;
    if (!email || !password) {
        alert("Fill all fields");
        
      return;
    }
    console.log({ email, password });

    event.currentTarget.reset();
};
  