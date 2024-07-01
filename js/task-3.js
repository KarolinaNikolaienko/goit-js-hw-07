// console.log("TASK 3");

const inpt = document.querySelector("#name-input");
inpt.addEventListener("input", (event) => {
    const outpt = document.querySelector("#name-output");
    outpt.textContent = event.currentTarget.value.trim() || "Anonymous";
});