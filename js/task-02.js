const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const element = document.createElement("li");
// const input = document.querySelector('input');
// li.classList.add("item");
// li.textContent = "Potatoes";
// input.value = "Potatoes";
// ingredients.append(li);
const li = '<li class="item">Potatoes</li>';
ingredients.insertAdjacentHTML("beforeand", li);

console.log(element);
