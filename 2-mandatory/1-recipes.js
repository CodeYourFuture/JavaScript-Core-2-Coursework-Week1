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
const recipe1 = {
  title: "Fried Egg",
  servings: 1,
  ingredients: ["Egg", "Oil"],
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log(`Ingredients:
${recipe1.ingredients[0]}
${recipe1.ingredients[1]}`);

const recipe2 = {
  title: "Spinach Rice",
  servings: 2,
  ingredients: ["Spinach", "Rice"],
};

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log(`Ingredients:
${recipe2.ingredients[0]}
${recipe2.ingredients[1]}`);

const recipe3 = {
  title: "Behari Kebab",
  servings: 4,
  ingredients: ["Kebab", "Masala"],
};

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log(`Ingredients:
${recipe3.ingredients[0]}
${recipe3.ingredients[1]}`);

const recipe4 = {
  title: "Fried Fish",
  servings: 1,
  ingredients: ["Fish", "Oil"],
};

console.log(recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log(`Ingredients:
${recipe4.ingredients[0]}
${recipe4.ingredients[1]}`);

const recipe5 = {
  title: "Icecream Milkshake",
  servings: 1,
  ingredients: ["Icecream", "Milk"],
};

console.log(recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log(`Ingredients:
${recipe5.ingredients[0]}
${recipe5.ingredients[1]}`);
