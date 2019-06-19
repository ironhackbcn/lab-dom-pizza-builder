let state = {
    pepperonni:true,
    mushrooms:true,
    greenPeppers:true,
  whiteSauce: false,
  glutenFreeCrust: false
};

window.addEventListener("load", init);

function init() {
  let buttonPepperonni = document.getElementsByClassName("btn-pepperonni");
  buttonPepperonni[0].addEventListener("click", renderPepperonni);
  let buttonMushrooms = document.getElementsByClassName("btn-mushrooms");
  buttonMushrooms[0].addEventListener("click", renderMushrooms);
  let buttonGreePepper = document.getElementsByClassName("btn-green-peppers");
  buttonGreePepper[0].addEventListener("click", renderGreenPeppers);
  let buttonSauce = document.getElementsByClassName("btn-sauce");
  buttonSauce[0].addEventListener("click", renderWhiteSauce);
  let buttonCrust = document.getElementsByClassName("btn-crust");
  buttonCrust[0].addEventListener("click", renderGlutenFreeCrust);
  
}

function renderPepperonni() {
  looper("pep");
  state.pepperonni=!(state.pepperonni);
}

function renderMushrooms() {
  looper("cap");
  looper("stem");
  state.mushrooms=!(state.mushrooms);
}

function renderGreenPeppers() {
  looper("green-pepper");
  state.greenPeppers=!(state.greenPeppers);
}

function renderWhiteSauce() {
  state.whiteSauce = !state.whiteSauce;
  let whiteSauce=document.getElementsByClassName("sauce");
}
function renderGlutenFreeCrust() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  let freeCrust=document.getElementsByClassName("crust");
}

function renderButtons(){
    
}

function renderPrice(){}

function looper(nameClass) {
  let ingredient = document.getElementsByClassName(nameClass);
  for (let i = 0; i < ingredient.length; i++) {
    if (
      ingredient[i].style.display === "" ||
      ingredient[i].style.display === "block"
    ) {
      ingredient[i].style.display = "none";
    } else if (ingredient[i].style.display === "none") {
      ingredient[i].style.display = "block";
    }
  }
}
