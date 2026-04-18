let button = document.getElementById("btn");
let hexCode = document.getElementById("hexCode");

function generateColor() {
  let chars = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += chars[randomIndex];
  }

  document.body.style.backgroundColor = color;
  hexCode.textContent = color;
}

button.addEventListener("click", generateColor);
