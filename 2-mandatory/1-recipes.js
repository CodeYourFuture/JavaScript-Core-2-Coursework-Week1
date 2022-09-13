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
let recipeCard = {
  title: 'Mole',
  serves: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa'],
};
console.log(recipeCard['title']);
const key = Object.keys(recipeCard);
const key2 = Object.values(recipeCard);
console.log(key[1],key2[1]);
console.log(`${key2[0]},\n,${key2[1]},\n,${key2[2]}`);
