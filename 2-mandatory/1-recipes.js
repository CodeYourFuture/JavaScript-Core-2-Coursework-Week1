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

let recipe = {

  title: "cake",
  servings: 5,
  ingredients:["milk", "eggs", "butter", "flour", "sugar"]
  }

const { title, servings, ingredients } = recipe;

console.log(title);
console.log(servings);
console.log(ingredients);
