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
let recipes = {
  recipe1: {
    title: "Creamed Spinach",
    servings: 4,
    ingredients: ["Butter", "Spinach", "Mushrooms"],
  },

  recipe2: {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },

  recipe3: {
    title: "Chakalaka",
    servings: 2,
    ingredients: ["Beans", "Carrots", "Oil", "Onion"],
  },
};

const allRecipes = Object.keys(recipes);

for (let key of allRecipes) {
  console.log(recipes[key]);
}
