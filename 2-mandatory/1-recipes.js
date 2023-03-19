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

let favoriteRecipe1 = {
  title: "Pizza dough",
  servings: 6,
  ingredients: ["flour", "water", "olive oil", "sugar", "salt"],
}

console.log(favoriteRecipe1.title);
console.log(`Serves: ${favoriteRecipe1.servings}`);
console.log("Ingredients:");
console.log(favoriteRecipe1.ingredients[0]);
console.log(favoriteRecipe1.ingredients[1]);
console.log(favoriteRecipe1.ingredients[2]);
console.log(favoriteRecipe1.ingredients[3]);
console.log(favoriteRecipe1.ingredients[4]);

let favoriteRecipe2 = {
  title: "Simple Homemade Sugar Donuts",
  servings: 14,
  ingredients: ["warm water", "sugar", "yeast", "butter", "eggs"],
}

console.log(favoriteRecipe2.title);
console.log(`Serves: ${favoriteRecipe2.servings}`);
console.log("Ingredients:");
console.log(favoriteRecipe2.ingredients[0]);
console.log(favoriteRecipe2.ingredients[1]);
console.log(favoriteRecipe2.ingredients[2]);
console.log(favoriteRecipe2.ingredients[3]);
console.log(favoriteRecipe2.ingredients[4]);