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
  servings: 2,
  ingredients: [
    "cinnamon",
    "cumin",
    "cocoa"
  ]
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log(`Ingredients: 
${recipe1.ingredients[0]} 
${recipe1.ingredients[1]} 
${recipe1.ingredients[2]}`);

console.log("\n");

let recipe2 = {
  title: "Tiger",
  servings: 8,
  ingredients: [
    "orange",
    "pepper",
    "olive oil"
  ]
};

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log(`Ingredients: 
${recipe2.ingredients[0]} 
${recipe2.ingredients[1]} 
${recipe2.ingredients[2]}`);

console.log("\n");

let recipe3 = {
  title: "Yeti",
  servings: 10,
  ingredients: [
    "salt",
    "lentils",
    "leek"
  ]
};

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log(`Ingredients: 
${recipe3.ingredients[0]} 
${recipe3.ingredients[1]} 
${recipe3.ingredients[2]}`);

console.log("\n");

let recipe4 = {
  title: "Lemming",
  servings: 1,
  ingredients: [
    "celeriac",
    "vanilla extract",
    "quail egg"
  ]
};

console.log(recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log(`Ingredients: 
${recipe4.ingredients[0]} 
${recipe4.ingredients[1]} 
${recipe4.ingredients[2]}`);

console.log("\n")

let recipe5 = {
  title: "Parrot",
  servings: 3,
  ingredients: [
    "strawberry",
    "gold leaf",
    "spinach"
  ]
};

console.log(recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log(`Ingredients: 
${recipe5.ingredients[0]} 
${recipe5.ingredients[1]} 
${recipe5.ingredients[2]}`)