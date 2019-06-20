let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
let prices = {
  pepperonni: [1, "pepperonni"],
  mushrooms: [1, "mushrooms"],
  greenPeppers: [1, "green peppers"],
  whiteSauce: [3, "white sauce"],
  glutenFreeCrust: [5, "gluten-free crust"]
};

window.addEventListener("load", init);

function init() {
  renderEverything();
  let buttonPepperonni = document.getElementsByClassName("btn-pepperonni");
  buttonPepperonni[0].addEventListener("click", pepperonniClick);
  let buttonMushrooms = document.getElementsByClassName("btn-mushrooms");
  buttonMushrooms[0].addEventListener("click", mushroomsClick);
  let buttonGreePepper = document.getElementsByClassName("btn-green-peppers");
  buttonGreePepper[0].addEventListener("click", greenPepperClick);
  let buttonSauce = document.getElementsByClassName("btn-sauce");
  buttonSauce[0].addEventListener("click", whiteSauceClick);
  let buttonCrust = document.getElementsByClassName("btn-crust");
  buttonCrust[0].addEventListener("click", GlutenFreeCrustClick);
}
function pepperonniClick() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
}
function mushroomsClick() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}
function greenPepperClick() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}
function whiteSauceClick() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}
function GlutenFreeCrustClick() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}

function renderButtons(typeOfButton, state, message) {
  activeOrNotButtons(typeOfButton, state, message);
}

function renderPrice() {
  let textproof = "";
  let finalPrice = 10;
  let li;
  let contentPrice = document
    .getElementsByClassName("price")[0]
    .getElementsByTagName("ul")[0];
  contentPrice.innerHTML = ""; //Here reset de content.
  let theBill = document
    .getElementsByClassName("price")[0]
    .getElementsByTagName("strong")[0];
  theBill.innerHTML = "";
  for (let states in state) {
    if (state[states] === true) {
      finalPrice += prices[states][0];
      li = document.createElement("li");
      li.innerHTML = `$${prices[states][0]} ${prices[states][1]}`;
      contentPrice.appendChild(li);
    }
  }
  theBill.innerHTML = "$" + finalPrice.toString();
}

function renderPepperonni() {
  showHideIngredients("pep", state.pepperonni);
  renderButtons("btn-pepperonni", state.pepperonni, "active");
}
function renderMushrooms() {
  showHideIngredients("cap", state.mushrooms);
  showHideIngredients("stem", state.mushrooms);
  renderButtons("btn-mushrooms", state.mushrooms, "active");
}
function renderGreenPepper() {
  showHideIngredients("green-pepper", state.greenPeppers);
  renderButtons("btn-green-peppers", state.greenPeppers, "active");
}
function renderWhiteSauce() {
  renderButtons("btn-sauce", state.whiteSauce, "active");
  activeOrNotButtons("sauce", state.whiteSauce, "sauce-white");
}
function renderGlutenFreeCrust() {
  renderButtons("btn-crust", state.glutenFreeCrust, "active");
  activeOrNotButtons("crust", state.glutenFreeCrust, "crust-gluten-free");
}

function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPepper();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderPrice();
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
