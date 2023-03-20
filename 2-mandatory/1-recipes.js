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
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

let recipe2 = {
  title: "Pesto Pasta",
  servings: 4,
  ingredients: ["pasta", "basil", "garlic", "pine nuts", "olive oil"]
};

let recipe3 = {
  title: "Guacamole",
  servings: 6,
  ingredients: ["avocado", "tomato", "onion", "lime", "cilantro"]
};

let recipe4 = {
  title: "Chicken Curry",
  servings: 3,
  ingredients: ["chicken", "curry powder", "coconut milk", "onion", "garlic"]
};

let recipe5 = {
  title: "Hummus",
  servings: 8,
  ingredients: ["chickpeas", "tahini", "lemon juice", "garlic", "olive oil"]
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe1.ingredients.length; i++) {
  console.log(recipe1.ingredients[i]);
}
console.log("");

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe2.ingredients.length; i++) {
  console.log(recipe2.ingredients[i]);
}
console.log("");

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe3.ingredients.length; i++) {
  console.log(recipe3.ingredients[i]);
}
console.log("");

console.log(recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe4.ingredients.length; i++) {
  console.log(recipe4.ingredients[i]);
}
console.log("");

console.log(recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe5.ingredients.length; i++) {
  console.log(recipe5.ingredients[i]);
}
console.log("");
