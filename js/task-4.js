const formElem = document.querySelector("form.login-form");
formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email || !password)
        alert('All form fields must be filled in');
    else {
        const inputData = { email, password };
        console.log("TASK 4");
        console.log(inputData);
        form.reset();
    }
});
