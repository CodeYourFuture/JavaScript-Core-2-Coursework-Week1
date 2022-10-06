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
function Recipe(title, serves, ingredients) {
    this.title = title,
    this.serves = serves,
    this.ingredients = ingredients
  }
// USE CONSTRCUTOR TO BUILD OBJECTS QUICKLY
let receipeOne = new Recipe("Stir Friedrice", 1, ["vege","oyster sauce","chicken","rice"]);
let receipeTwo = new Recipe("Stir Friednoodle", 2, ["vege","sweetchilli sauce","chicken","noodle"]);
let receipeThree = new Recipe("Chicken Curry", 3, ["onion","oil","chicken","spices"]);
let receipeFour = new Recipe("Lentils Soup", 4, ["lentils","onion","garlic"]);
let receipeFive = new Recipe("Chicken Salad", 5, ["lettuce","ceasar dressing","chicken","olive"]);

const recipes = [receipeOne, receipeTwo, receipeThree, receipeFour, receipeFive]

 recipes.forEach (recipe => {
   console.log(recipe.title);
  console.log(`Serve: ${recipe.serves}`);
  console.log(`Ingredients: \n ${recipe.ingredients}`);
});
