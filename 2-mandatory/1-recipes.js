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

// First Recipe
const recipe1 = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log("Ingredients: ");
for (let i = 0; i < recipe1.ingredients.length; i++) {
  console.log(recipe1.ingredients[i]);
}

// Second recipe
const recipe2 = {
  title: "Pasta Bolognese",
  servings: 3,
  ingredients:["pasta", "onion", "garlic", "500g beef mince", "tomato sos", "olive oil"]
};

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log("Ingredients: ");
for (let i = 0; i < recipe2.ingredients.length; i++) {
  console.log(recipe2.ingredients[i]);
}

// Third Recipe

const recipe3 = {
  title: "Pizza",
  servings: 4,
  ingredients: ["dough", "salami", "tomato sos", "ham", "cheese"]
};

console.log(recipe3.title);
console.log(`Serves ${recipe3.servings}`);
console.log("Ingredients: ");
for (let i = 0; i < recipe3.ingredients.length; i++) {
  console.log(recipe3.ingredients[i]);
}

// Forth Recipe

const recipe4 = {
  title: "Snitzels and chips",
  servings: 3,
  ingredients: ["chicken breast", "eggs", "flour", "oil", "potatos"]
};

console.log(recipe4.title);
console.log(`Serves ${recipe4.servings}`);
console.log("Ingredients: ");
for (let i = 0; i < recipe4.ingredients.length; i++) {
  console.log(recipe4.ingredients[i]);
}

//Fifth Recipe

const recipe5 = {
  title: "Meatballs pasta",
  servings: 3,
  ingredients: ["beef", "pasta", "tomato sos", "garlic", "oil"]
};

console.log(recipe5.title);
console.log(`Serves ${recipe5.servings}`);
console.log("Ingredients: ");
for (let i = 0; i < recipe5.ingredients.length; i++) {
  console.log(recipe5.ingredients[i]);
}