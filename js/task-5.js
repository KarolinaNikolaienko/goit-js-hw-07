// console.log("TASK 5");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button.change-color");
btn.addEventListener("click", (event) => {
    const color = getRandomHexColor();
    document.querySelector("body").style.backgroundColor = color;
    document.querySelector("span.color").textContent = color;
});