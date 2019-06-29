// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

var activeButtons = ["btn-pepperonni", "btn-mushrooms", "btn-green-peppers"];

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  greenPep = document.querySelectorAll(".green-pepper");
  greenPep.forEach(function($el) {
    if (state.greenPeppers) {
      $el.style.visibility = "visible";
    } else {
      $el.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  var sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.className = "sauce";
  } else {
    sauce.className = "sauce sauce-white";
  }
}

function renderGlutenFreeCrust() {
  var crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.className = "crust";
  } else {
    crust.className = "crust crust-gluten-free";
  }
}

// No me ha funcionado este método :(

// function renderButtons(e) {
// var btn = e.target;
// if (btn.classList.contains("active")) {
//   btn.classList.remove("active");
// } else {
//   btn.classList.add("active");
// }
// }

function renderButtons() {
  var buttons = document.querySelectorAll(".btn");
  buttons.forEach(function(el) {
    var classes = el.classList.value;
    var splitedClasses = classes.split(" ");
    var a = splitedClasses.indexOf("btn");
    var b = splitedClasses.indexOf("active");
    splitedClasses.splice(a, 1).splice(b, 1);
    var uniqueClass = splitedClasses[0];
    var c = activeButtons.indexOf(uniqueClass);
    if (c === -1) {
      el.classList.remove("active");
    } else if (c > -1) {
      el.classList.add("active");
    }
  });
}

function renderPrice() {
  var panel = document.querySelector(".panel.price");
  while (panel.hasChildNodes()) {
    panel.removeChild(panel.firstChild);
  }
  var h2 = document.createElement("h2");
  h2.innerHTML = `Your pizza's price`;
  panel.appendChild(h2);
  var base = document.createElement("b");
  base.innerHTML = `$10 cheese pizza`;
  panel.appendChild(base);
  var ingredientList = document.createElement("ul");
  panel.appendChild(ingredientList);
  var total = [];
  activeButtons.forEach(function(item) {
    var ingredient = document.createElement("li");
    ingredient.className = "ingredient";
    switch (item) {
      case "btn-pepperonni":
        ingredient.innerHTML = `$${ingredients.pepperonni.price} pepperonni`;
        total.push(ingredients.pepperonni.price);
        break;
      case "btn-mushrooms":
        ingredient.innerHTML = `$${ingredients.mushrooms.price} mushrooms`;
        total.push(ingredients.mushrooms.price);
        break;
      case "btn-green-peppers":
        ingredient.innerHTML = `$${
          ingredients.greenPeppers.price
        } green peppers`;
        total.push(ingredients.greenPeppers.price);
        break;
      case "btn-sauce":
        ingredient.innerHTML = `$${ingredients.whiteSauce.price} white sauce`;
        total.push(ingredients.whiteSauce.price);
        break;
      case "btn-crust":
        ingredient.innerHTML = `$${
          ingredients.glutenFreeCrust.price
        } gluten-free crust`;
        total.push(ingredients.glutenFreeCrust.price);
        break;
    }
    panel.appendChild(ingredient);
  });
  var grossTotal =
    basePrice +
    total.reduce(function(sum, el) {
      return sum + el;
    }, 0);
  console.log(grossTotal);
  var displayTotal = document.createElement("p");
  displayTotal.innerHTML = `<strong>$${grossTotal}</strong>`;
  panel.appendChild(displayTotal);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  if (state.pepperonni) {
    var activeBtn = "btn-pepperonni";
    activeButtons.push(activeBtn);
  }
  if (!state.pepperonni) {
    var a = activeButtons.indexOf("btn-pepperonni");
    activeButtons.splice(a, 1);
  }
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  if (state.mushrooms) {
    var activeBtn = "btn-mushrooms";
    activeButtons.push(activeBtn);
  }
  if (!state.mushrooms) {
    var a = activeButtons.indexOf("btn-mushrooms");
    activeButtons.splice(a, 1);
  }
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  if (state.greenPeppers) {
    var activeBtn = "btn-green-peppers";
    activeButtons.push(activeBtn);
  }
  if (!state.greenPeppers) {
    var a = activeButtons.indexOf("btn-green-peppers");
    activeButtons.splice(a, 1);
  }
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce) {
    var activeBtn = "btn-sauce";
    activeButtons.push(activeBtn);
  }
  if (!state.whiteSauce) {
    var a = activeButtons.indexOf("btn-sauce");
    activeButtons.splice(a, 1);
  }
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if (state.glutenFreeCrust) {
    var activeBtn = "btn-crust";
    activeButtons.push(activeBtn);
  }
  if (!state.glutenFreeCrust) {
    var a = activeButtons.indexOf("btn-crust");
    activeButtons.splice(a, 1);
  }
  renderEverything();
};
