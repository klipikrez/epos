function ToggleBurger(burgerButton){
    const buttons = document.querySelectorAll('.menuItem');
    console.log(buttons[1].style.display);
    if(buttons[1].style.display == 'none')
    {
        ShowBurgerButtons();
    }else
    {
        HideBurgerButtons();
    }
}

function ShowBurgerButton() {
        
    const burger = document.getElementById('burger');
    burger.style.display = 'unset';
}

function HideBurgerButton()
{
    
    const burger = document.getElementById('burger');
    burger.style.display = 'none';
}

function ShowBurgerButtons() {
    const burger = document.getElementById('burger');
    let display =  burger.style.display;

    const buttons = document.querySelectorAll('.menuItem');
    buttons.forEach(button => button.style.display = 'unset');
    
    burger.style.display = display;
}

function HideBurgerButtons()
{
    const burger = document.getElementById('burger');
    let display =  burger.style.display;

    const buttons = document.querySelectorAll('.menuItem');
    buttons.forEach(button => button.style.display = 'none');
    
    burger.style.display = display;
}

function viewForm(){
    if (window.innerWidth > 700) {
        HideBurgerButton();
        ShowBurgerButtons();

    } else {
        ShowBurgerButton();
        HideBurgerButtons();

    }
  };
  
  window.addEventListener('resize', viewForm);

