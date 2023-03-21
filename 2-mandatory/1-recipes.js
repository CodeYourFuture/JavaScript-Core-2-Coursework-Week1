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

const recipe = {
  title: 'pasta dough',
  servings: 2,
  ingredients: ['2 cups flour', '3 large eggs, at room temperature', '2 tablespoons olive oil', '1 teaspoon salt', '2 tablespoons water, or as needed']
};

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log('Ingredients:');
recipe.ingredients.forEach(ingredient => console.log(ingredient));


// Pasta dough
// Serves: 2
// Ingredients:
// 2 cups flour
// 3 large eggs, at room temperature 
// 2 tablespoons olive oil
// 1 teaspoon salt
// 2 tablespoons water, or as needed