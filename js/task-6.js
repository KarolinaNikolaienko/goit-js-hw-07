function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const size = 30;
    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = div.style.height = size + 10 * i + "px";
        div.style.backgroundColor = getRandomHexColor();
        boxesDiv.insertAdjacentElement("beforeend", div);
    }
}

function destroyBoxes() {
    boxesDiv.innerHTML = "";
}

const boxesDiv = document.querySelector("div#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", (event) => {
    const amountInpt = document.querySelector("div#controls input");
    if (amountInpt.value > 0 && amountInpt.value <= 100) {
        destroyBoxes();
        createBoxes(amountInpt.value);
        amountInpt.value = null;
    }
});

destroyBtn.addEventListener("click", destroyBoxes);