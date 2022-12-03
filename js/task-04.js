const refs = {
  targetBtn: document.querySelector(".value"),
  removeListenerBtn: document.querySelector('[data-action="decrement"]'),
  addListenerBtn: document.querySelector('[data-action="increment"]'),
};
// const targetBtn = document.querySelector('.value');
// const removeListenerBtn = document.querySelector(".decrement");
// const addListenerBtn = document.querySelector(".increment"); 

let counterValue = 0;

addListenerBtn.addEventListener('click', evt => {
    console.log(evt);
    targetBtn.addEventListener('click', onTurgetButtonClick);
});

removeListenerBtn.addEventListener('click', evt => {
    console.log(evt);
    targetBtn.removeEventListener("click", onTurgetButtonClick);
});

function onTurgetButtonClick(evt) {
    console.log(evt);
}

// const buttonDec = document.querySelector(".decrement")
// console.log(buttonDec);
// buttonDec.addEventListener('click', onClick, {once: true})

// function onClick(evt) {
//     console.log(evt);
// }