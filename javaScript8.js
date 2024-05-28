function randomHexColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

function changeColor(element) {
  element.style.backgroundColor = randomHexColor();
  element.onclick = () => {};

  for (let i = 0; i < 4; i++) {
    const newDiv = document.createElement("div");

    newDiv.className = "cell";
    newDiv.style.backgroundColor = randomHexColor();
    newDiv.onclick = () => changeColor(newDiv);
    element.appendChild(newDiv);
  }
}

const appContainer = document.querySelector("#app");

appContainer.onclick = () => {
  changeColor(appContainer);
};
