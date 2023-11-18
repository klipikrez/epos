function ToggleBurger(burgerButton) {
  const buttons = document.querySelectorAll(".menuItem");
  if (buttons[1].style.display == "none") {
    ShowBurgerButtons();
  } else {
    HideBurgerButtons();
  }
}

function ShowBurgerButtons() {
  const buttons = document.querySelectorAll(".menuItem");
  buttons.forEach((button) => {
    if (button.id != "burger") {
      button.style.display = "unset";
    }
  });
}

function HideBurgerButtons() {
  const buttons = document.querySelectorAll(".menuItem");
  buttons.forEach((button) => {
    if (button.id != "burger") {
      button.style.display = "none";
    }
  });
}

function viewForm() {
  if (window.innerWidth > 700) {
    ShowBurgerButtons();
  } else {
    HideBurgerButtons();
  }
}

window.addEventListener("resize", viewForm);
