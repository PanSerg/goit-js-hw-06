const input = document.getElementById("validation-input");
input.addEventListener("blur", changeInput);

function changeInput(e) {
  if (Number(e.target.getAttribute("data-length")) === e.target.value.length) {
    toggleClass(e.target, "valid", "invalid");
    return;
  }
  toggleClass(e.target, "invalid", "valid");
}

function toggleClass(ref, add, rem) {
  ref.classList.add(add);
  ref.classList.remove(rem);
}

// Предыдущий вариант //

// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (this.getAttribute("data-length") > this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };


