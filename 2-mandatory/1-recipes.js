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
let recipe1 = {
  title: "honeyCake",
  servings: 10,
  ingredients:["flour", "honey", "eggs", "sugar","baking soda","cream"],
}
// console.log(recipe1);

let recipe2 = {
  title: "applePie",
  servings: 6,
  ingredients:["flour", "apples", "eggs", "milk","baking soda", "butter"],
}
// console.log(recipe2);

let recipe3 = {
  title: "mushroomSoup",
  servings: 6,
  ingredients:["mushroom", "onion", "potato", "carrot","broth"],
}
// console.log(recipe3);

let recipe4 = {
  title: "borek",
  servings: 5,
  ingredients:["filo pastry", "cheese", "spinach", "egg"],
}
// console.log(recipe4);

let recipe5 = {
  title: "almondMuffin",
  servings: 2,
  ingredients:["flour", "eggs", "butter", "milk","baking","almonds"],
}
// console.log(recipe5);

function showRecipe (recipe) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.servings}`);
  console.log(recipe["ingredients"].join("\r\n"));
}

console.log(showRecipe(recipe1));

// https://stackoverflow.com/questions/10982913/javascript-how-to-show-each-element-of-array-on-a-new-line