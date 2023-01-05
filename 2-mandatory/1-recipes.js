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

let recipeOne = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};

console.log(recipeOne.title);
console.log(`Serves: ${recipeOne.servings}`);
console.log("Ingredients: ");
console.log(recipeOne.ingredients[0]);
console.log(recipeOne.ingredients[1]);
console.log(recipeOne.ingredients[2]);
console.log(recipeOne.ingredients[3]);
