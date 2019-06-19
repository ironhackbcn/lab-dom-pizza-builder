let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: fakse
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
  state.pepperonni = !state.pepperonni;
  renderButtons("btn-pepperonni", state.pepperonni, "active");
  renderEverything();
}

function renderMushrooms() {
  state.mushrooms = !state.mushrooms;
  renderButtons("btn-mushrooms", state.mushrooms, "active");
  renderEverything();
}

function renderGreenPeppers() {
  state.greenPeppers = !state.greenPeppers;
  renderButtons("btn-green-peppers", state.greenPeppers, "active");
  renderEverything();
}

function renderWhiteSauce() {
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce === false) {
    document.getElementsByClassName("sauce")[0].classList.remove("sauce-white");
  } else if (state.whiteSauce === true) {
    document.getElementsByClassName("sauce")[0].classList.add("sauce-white");
  }
  renderButtons("btn-sauce", state.whiteSauce, "active");
  renderEverything();
}

function renderGlutenFreeCrust() {
  state.glutenFreeCrust = !state.glutenFreeCrust;

  if (state.glutenFreeCrust === false) {
    document
      .getElementsByClassName("crust")[0]
      .classList.remove("crust-gluten-free");
  } else if (state.glutenFreeCrust === true) {
    document
      .getElementsByClassName("crust")[0]
      .classList.add("crust-gluten-free");
  }
  renderButtons("btn-crust", state.pepperonni, "active");
  renderEverything();
}

function renderButtons(typeOfButton, state, message) {
  activeOrNotButtons(typeOfButton, state, message);
}

function renderPrice() {}

function renderEverything() {
  showHideIngredients("pep", state.pepperonni);
  showHideIngredients("cap", state.mushrooms);
  showHideIngredients("stem", state.mushrooms);
  showHideIngredients("green-pepper", state.greenPeppers);
  showHideIngredients("sauce", state.whiteSauce);
  showHideIngredients("crust", state.glutenFreeCrust);
}

function showHideIngredients(nameClass, stateOfIngredients) {
  let ingredient = document.getElementsByClassName(nameClass);
  ingredient.classList;
  for (let i = 0; i < ingredient.length; i++) {
    if (stateOfIngredients === true) {
      ingredient[i].style.display = "block";
    } else if (stateOfIngredients === false) {
      ingredient[i].style.display = "none";
    }
  }
}

function activeOrNotButtons(ingredient, state, message) {
  if (state === false) {
    document.getElementsByClassName(ingredient)[0].classList.remove(message);
  } else if (state === true) {
    document.getElementsByClassName(ingredient)[0].classList.add(message);
  }
}
