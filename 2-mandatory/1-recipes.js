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
let recipeCard1 = {
  title: "Ramen",
  serves: 1,
  ingredients: ["noodles", "onions", "soySauce", "chickenBroth", "egg"],
}
let recipeCard2 = {
  title: "Cheese cake",
  serves: 5,
  ingredients: ["digestive biscuit", "soft cheese", "double cream", "strawberry"],
}

let recipeCard3 = {
  title: "ham sandwich",
  serves: 2,
  ingredients: ["bread", "ham", "butter"],
}

let recipeCard4 = {
  title: "smoothie",
  serves: 2,
  ingredients: ["banana", "strawberry", "yoghurt"],
}

let recipeCard5 = {
  title: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
}

function displayRecipes (recipeCard){
  console.log(recipeCard.title);
  console.log("serves: " + recipeCard.serves); 
  console.log("Ingredients: ")// this shows ingredients
  console.log(recipeCard.ingredients.join('\r\n'));
}

console.log(displayRecipes(recipeCard1));
console.log(displayRecipes(recipeCard2));
console.log(displayRecipes(recipeCard3));
console.log(displayRecipes(recipeCard4));
console.log(displayRecipes(recipeCard5));