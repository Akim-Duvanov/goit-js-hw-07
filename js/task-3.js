const result = document.querySelector("#name-output");
const textInput = document.querySelector("#name-input");

textInput.addEventListener("input", (event) => {
    const emptyCheck = event.currentTarget.value.trim();
    if (emptyCheck === "") {
        result.textContent = "Anonymous";
    } else {
        result.textContent = emptyCheck;
    }
});
