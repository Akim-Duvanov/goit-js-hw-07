const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }
    const result = {
        email: email.trim(),
        password: password.trim(),
    };

    console.log(result);
    form.reset();
}
