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
let favoriteRecipe = {
  title: " Bread",
  serving: 2,
  ingredients: ["flour", "water", "sugar"],
};
console.log(favoriteRecipe.title)
console.log(`Serves:${favoriteRecipe.serving}`)
favoriteRecipe.ingredients.forEach((ingredients) => {
  console.log(ingredients)
});

let secondRecipe = {
  title: "tea",
  servings: 2,
  ingredients: ["tea bag", "hot water", "sugar"],
};

console.log(secondRecipe.title);
console.log(`Serves: ${secondRecipe.servings}`);
console.log(`Ingredients:`);
secondRecipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});
let fourthRecipe = {
  title: "fried egg",
  servings: 2,
  ingredients: ["egg", "oil", "onion", "salt"],
};

console.log(fourthRecipe.title);
console.log(`Serves: ${fourthRecipe.servings}`);
console.log(`Ingredients:`);
fourthRecipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let fifthRecipe = {
  title: "chicken meckhni",
  servings: 1,
  ingredients: ["chicken", "single cream", "garlic", "garam masala", "ginger", "butter"],
};

console.log(fifthRecipe.title);
console.log(`Serves: ${fifthRecipe.servings}`);
console.log(`Ingredients:`);
fifthRecipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

