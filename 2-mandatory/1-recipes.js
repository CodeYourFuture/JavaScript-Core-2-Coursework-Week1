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

// Recipe 1
let recipe1 = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe1.ingredients.length; i++) {
  console.log(recipe1.ingredients[i]);
}

// Recipe 2
let recipe2 = {
  title: "Bolani",
  servings: 4,
  ingredients: ["Gandana", "Dough", "oil", "salt", "green pepper"]
};

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe2.ingredients.length; i++) {
  console.log(recipe2.ingredients[i]);
}

// Recipe 3
let recipe3 = {
  title: "Borani Badinjan",
  servings: 6,
  ingredients: ["Ege plant", "tomato sauce", "oil", "black pepper", "turmeric", "garlic", "yogurt"]
};

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe3.ingredients.length; i++) {
  console.log(recipe3.ingredients[i]);
}

// Recipe 4
let recipe4 = {
  title: "Aye khanum",
  servings: 8,
  ingredients: ["beef mans", "carrot", "potatoes", "onion", "garlic", "oil", "tomato paste", "yogurt", "fresh coriander"]
};

console.log(recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe4.ingredients.length; i++) {
  console.log(recipe4.ingredients[i]);
}

// Recipe 5
let recipe5 = {
  title: "Qabili",
  servings: 6,
  ingredients: ["rice", "oil", "onion", "carrots", "raisin", "salt", "lamb meat", "char masala"]
};

console.log(recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe5.ingredients.length; i++) {
  console.log(recipe5.ingredients[i]);
}
