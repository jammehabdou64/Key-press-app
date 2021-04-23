const selectAll = (element) => document.querySelectorAll(element);

const select = (element) => document.querySelector(element);

const setBackground = (element, bgColor) =>
  (element.style.background = bgColor);

window.parent.addEventListener("keypress", (event) => {
  let spaceBtn = select(".space-btn");
  spaceBtn.style.background = "red";

  // setBackground(spaceBtn, "rgb(239, 239, 239)");

  if (event.keyCode == 32) {
    setBackground(spaceBtn, "rgb(151, 146, 146)");
    return;
  }
  let buttons = selectAll("button");
  buttons.forEach((button) => {
    setBackground(button, "rgb(239, 239, 239)");

    if (button.innerText == event.key.toLocaleUpperCase()) {
      return setBackground(button, "rgb(151, 146, 146)");
    }
  });
  return;
});
