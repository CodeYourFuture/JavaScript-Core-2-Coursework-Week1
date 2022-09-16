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
  title: "orange juice",
  servings: 4,
  ingredients: ["oranges", "ice cubes", "sugar", "water"],
};

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log("Ingredients:");
recipe.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe2 = {
  title: "Pancakes",
  servings: 3,
  ingredients: ["flour", "eggs", "sugar", "butter"],
};

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log("Ingredients:");
recipe2.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe3 = {
  title: "Jellofrice",
  servings: 4,
  ingredients: ["rice", "tomatoes", "vegetable-oil", "salt", "pepper"],
};

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log("Ingredients:");
recipe3.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe4 = {
  title: "Noodles",
  servings: 2,
  ingredients: ["noodles", "carrots", "water"],
};

console.log(recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log("Ingredients:");
recipe4.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe5 = {
  title: "Pasta",
  servings: 1,
  ingredients: ["spaghetti", "tomatoes", "salt", "vegetable-oil", "thyme"],
};
console.log(recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log("Ingredients:");
recipe5.ingredients.forEach((ingredient) => console.log(ingredient));
