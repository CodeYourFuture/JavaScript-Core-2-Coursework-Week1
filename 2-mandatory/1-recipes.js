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
  title: "Mole",
  serving: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};
console.log(recipe1.title);
console.log(`Serves: ${recipe1.serving}`);
console.log("Ingredients: ");
recipe1.ingredients.forEach((ingredients) => {
  console.log(ingredients);
});

let recipe2 = {
  title: "Cake",
  servings: 2,
  ingredients: ["eggs", "milk", "butter", "baking powder"],
};
console.log("\n" + recipe1.title);
console.log(`Serves: ${recipe2.servings}`);
console.log("Ingredients: ");
recipe2.ingredients.forEach((ingredients) => {
  console.log(ingredients);
});

let recipe3 = {
  title: "Omelet",
  servings: 3,
  ingredients: ["eggs", "water", "salt", "pepper"],
};
console.log("\n" + recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log("Ingredients: ");
recipe3.ingredients.forEach((ingredients) => {
  console.log(ingredients);
});

let recipe4 = {
  title: "Fumbwa",
  servings: 4,
  ingredients: ["spring onions", "peanut butter", "ripe tomatoes", "fish"],
};
console.log("\n" + recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log("Ingredients: ");
recipe4.ingredients.forEach((ingredients) => {
  console.log(ingredients);
});

let recipe5 = {
  title: "Mexican rice",
  servings: 4,
  ingredients: ["tomatoes", "green onions", "cilantro"],
};
console.log("\n" + recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log("Ingredients: ");
recipe5.ingredients.forEach((ingredients) => {
  console.log(ingredients);
});
