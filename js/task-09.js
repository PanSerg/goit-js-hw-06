const spanColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

const colors = ["#FF5733", "#F9FF33", "#3371FF", "green", "red", "rgb(85, 255, 51)",];

btnChangeColor.addEventListener("click", () => {
let hexColor = colors[getRandomHexColor()];
 document.body.style.backgroundColor = hexColor;
    spanColor.textContent = hexColor;
});

   function getRandomHexColor() {
     return Math.floor(Math.random() * colors.length);
   }
