/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/

// write code here
const sirloinSteak = {
  Title: 'Sirloin Steak',
  Serves: 1,
  Ingredients: ['Sirloin Steak', 'Potato', 'Echalion', 'Garlic Clove', 'Chervil', 'Tenderstem Broccoli', 'Chicken Stock Powder', 'Unsalte Butter']
}

const expressChickenNoodles = {
  Title: 'Express Chicken Noodles',
  Serves: 2,
  Ingredients: ['Egg Noodles', 'Diced Chicken Breast', 'Spring Onion', 'Lime', 'Mangetout', 'Ketjap Manis', 'Soy Sauce', 'Salted Peanuts']
}

const roastedDuckLeg = {
  Title: 'Roasted Duck Leg',
  Serves: 3,
  Ingredients: ['Confit Duck Leg', 'Shallot', 'Chopped Cavolo Nero', 'Thyme', 'Potatoes', 'Garlic Clove', 'Red Wine Stock Pot']
}

const gingerBeefStirFry = {
  Title: 'Ginger Beef Stir-Fry',
  Serves: 4,
  Ingredients: ['Green Beans', 'Ginger', 'Beef Steak Strips', 'Oyster Sauce', 'Garlic Clove', 'Basmati Rice', 'Soy Sauce', 'Lime']
}

const panFriedGnocchi = {
  Title: 'Pan-Fried Gnocchi',
  Serves: 5,
  Ingredients: ['Cherry Tomatoes', 'Basil', 'Creme Fraiche', 'Pancetta', 'Courgette', 'Pine Nuts', 'Italian Style Grated Hard Cheese', 'Gnocchi']
}

function showRecipe (recipe) {
  console.log(); // 4 space :)
  console.log(recipe['Title']);
  console.log(`Serves: ${recipe['Serves']}`);
  console.log('Ingredients:');
  recipe['Ingredients'].forEach(ingredient => {console.log(ingredient)});
  console.log(); // 4 space :)
}

showRecipe(sirloinSteak);
showRecipe(expressChickenNoodles);
showRecipe(roastedDuckLeg);
showRecipe(gingerBeefStirFry);
showRecipe(panFriedGnocchi);