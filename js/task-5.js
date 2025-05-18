function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgColor = document.querySelector(".color");
const bgButton = document.querySelector(".change-color");
const bgBody = document.querySelector("body");

bgButton.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const randValue = getRandomHexColor();
  bgColor.textContent = randValue;
  bgBody.style.backgroundColor = randValue;
}