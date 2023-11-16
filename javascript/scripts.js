function ToggleBurger(burgerButton) {
  const buttons = document.querySelectorAll(".menuItem");
  if (buttons[1].style.display == "none") {
    ShowBurgerButtons();
  } else {
    HideBurgerButtons();
  }
}

function ShowBurgerButtons() {
  const burger = document.getElementById("burger");
  let display = burger.style.display;

  const buttons = document.querySelectorAll(".menuItem");
  buttons.forEach((button) => (button.style.display = "unset"));

  burger.style.display = display;
}

function HideBurgerButtons() {
  const burger = document.getElementById("burger");
  let display = burger.style.display;

  const buttons = document.querySelectorAll(".menuItem");
  buttons.forEach((button) => (button.style.display = "none"));

  burger.style.display = display;
}

function viewForm() {
  if (window.innerWidth > 700) {
    ShowBurgerButtons();
  } else {
    HideBurgerButtons();
  }
}

window.addEventListener("resize", viewForm);
