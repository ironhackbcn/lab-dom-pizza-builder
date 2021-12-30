// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  sauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  sauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    // This is flag
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    // This is flag
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    // This is flag from state
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');
  // This is flag
  if (state.sauce) {
    whiteSauce.classList.add('sauce-white');
  } else {
    whiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">
  const glutenFree = document.querySelector('.crust');
  // This is flag
  if (state.glutenFreeCrust) {
    glutenFree.classList.add('crust-gluten-free');
  } else {
    glutenFree.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((button) => {
    const classListArr = Array.from(button.classList);
    const ingredientClass = classListArr.find((className) =>
      className.includes('btn-')
    );

    let ingredient;
    switch (ingredientClass) {
      case 'btn-pepperoni':
        ingredient = 'pepperoni';
        break;
      case 'btn-mushrooms':
        ingredient = 'mushrooms';
        break;
      case 'btn-green-peppers':
        ingredient = 'greenPeppers';
        break;
      case 'btn-green-peppers':
        ingredient = 'greenPeppers';
        break;
      case 'btn-sauce':
        ingredient = 'sauce';
        break;
      case 'btn-crust':
        ingredient = 'glutenFreeCrust';
        break;
    }

    if (state[ingredient]) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function renderPrice() {
  let total = basePrice;
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const cuenta = document.querySelector('.panel.price ul');
  cuenta.innerHTML = '';
  for (ingredient in ingredients) {
    if (state[ingredient]) {
      cuenta.innerHTML += `<li> ${ingredients[ingredient].price} ${ingredients[ingredient].name} </li>`;
      total += ingredients[ingredient].price;
    }
  }
  const priceElemnet = document.querySelector('.panel.price strong');
  priceElemnet.innerHTML = `$ ${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  console.log('Button pepperoni clicked');
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  console.log('Button mushroom clicked');
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    console.log('Button Green Peppers clicked');
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.sauce = !state.sauce;
  console.log('Button white sauce clicked');
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  console.log('Button gluten-free crust clicked');
  renderEverything();
});