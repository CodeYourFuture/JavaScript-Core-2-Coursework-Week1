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


favRecipe = {
title: "Tomato Soup",
servings: 2,
Ingredients: ["Tomatoes", "Black Pepper"],

}

console.log(favRecipe.title);
console.log(`Serves: ${favRecipe.servings}`);
console.log(`${Object.keys(favRecipe)[2]}:`);
console.log(favRecipe.Ingredients[0]);
console.log(favRecipe.Ingredients[1]);