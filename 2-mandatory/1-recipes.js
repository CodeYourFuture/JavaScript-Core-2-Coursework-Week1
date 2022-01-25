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
  title: "Meat Pie",
  servings: 4,
  ingredients: ["Pie dough", "Minced meat", "Seasoning"]
}
let recipe2 = {
  title: "Jacket Potato",
  servings: 2,
  ingredients: ["Potatoes", "Baked beans", "Cheese"]
}
let recipe3 = {
  title: "Rice and chicken stew",
  servings: 4,
  ingredients: ["Rice", "Tomatoes", "Seasoning", "Onion", "Pepper", "Chicken"],
};
let recipe4 = {
  title: "Fried Yam",
  servings: 2,
  ingredients: ["Yam", "Salt", "Oil", "Pepper", "Meat"],
};
let recipe5 = {
  title: "Soup",
  servings: 8,
  ingredients: ["Tomatoes", "Onions", "Pepper", "Seasoning", "Meat"],
};

function displayRecipes(recipe) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.servings}`);
  console.log("Ingredients:");
  for (let ingredient of recipe.ingredients) {
    console.log(ingredient);
  }
  return ""
}
console.log(displayRecipes(recipe1));
console.log(displayRecipes(recipe2));
console.log(displayRecipes(recipe3));
console.log(displayRecipes(recipe4));
console.log(displayRecipes(recipe5));