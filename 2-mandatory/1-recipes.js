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

let favouriteRecipe1 = {};

favouriteRecipe1.title = "Mole";
favouriteRecipe1.servings = 2;
favouriteRecipe1.ingredients = ["cinnamon", "cumin", "cocoa"];


console.log(favouriteRecipe1.title);
console.log(`serves: ${favouriteRecipe1.servings}`);
console.log("Ingredients: ");
for (let ingredient of favouriteRecipe1.ingredients) {
  console.log(ingredient);
}

console.log();

let favouriteRecipe2 = {};

favouriteRecipe2.title = "Ramen";
favouriteRecipe2.servings = 1;
favouriteRecipe2.ingredients = ["ramen cake", "egg", "spices", "chicken broth", "veggies"];

console.log(favouriteRecipe2.title);
console.log(`serves: ${favouriteRecipe2.servings}`);
console.log("Ingredients: ");
for (let ingredient of favouriteRecipe2.ingredients) {
  console.log(ingredient);
}

console.log();

let favouriteRecipe3 = {};

favouriteRecipe3.title = "Dried Mango";
favouriteRecipe3.servings = 3;
favouriteRecipe3.ingredients = ["mango", "seasoning", "oil"];

console.log(favouriteRecipe3.title);
console.log(`serves: ${favouriteRecipe3.servings}`);
console.log("Ingredients: ");
for (let ingredient of favouriteRecipe3.ingredients) {
  console.log(ingredient);
}

console.log();

let favouriteRecipe4 = {};

favouriteRecipe4.title = "Cacao Cake";
favouriteRecipe4.servings = 6;
favouriteRecipe4.ingredients = ["cacao", "maple syrup", "eggs", "coconut oil"];

console.log(favouriteRecipe4.title);
console.log(`serves: ${favouriteRecipe4.servings}`);
console.log("ingredients: ");
for (let ingredient of favouriteRecipe4.ingredients) {
  console.log(ingredient);
}

console.log();

let favouriteRecipe5 = {};

favouriteRecipe5.title = "Pad Thai";
favouriteRecipe5.servings = 3;
favouriteRecipe5.ingredients = ["glass noodles", "sauce", "shrimp", "peanuts", "eggs", "garlic, veggies"];

console.log(favouriteRecipe5.title);
console.log(`serves: ${favouriteRecipe5.servings}`);
console.log("Ingredients: ");
for (let ingredient of favouriteRecipe5.ingredients) {
  console.log(ingredient);
}
// write code here