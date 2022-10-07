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
function RecipeCard(title, servings, ingredients) {
  this.title = title;
  this.servings = servings;
  this.ingredients = ingredients;
}
const recipeMole = new RecipeCard("mole", 2, ["cinnamon", "cumin", "cocoa"]);
const recipe1 = new RecipeCard("mole1", 3, ["onions", "sunflower", "chilli"]);
const recipe2 = new RecipeCard("mole2", 25, ["garlic", "rosemary", "chicken"]);
const recipe3 = new RecipeCard("mole3", 26, ["butter", "lemons", "bread"]);
const recipe4 = new RecipeCard("mole4", 2, ["lamb", "nigella", "rice"]);
console.log(recipeMole);
console.log(recipe1);
console.log(recipe2);
console.log(recipe3);
console.log(recipe4);
