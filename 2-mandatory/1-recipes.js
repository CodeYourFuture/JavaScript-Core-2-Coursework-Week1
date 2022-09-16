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

let favoriteRecipes = {
  recipe1: {
    Title: "Chicken biryani",
    Serves: 2,
    Ingredients: ["chicken", "rice", "biryani masala"]
  },

  recipe2: {
    Title: "italian pizza",
    Serves: 3,
    Ingredients: ["flour", "olive oil", "tomatoes"]
  },

  recipe3: {
    Title: "Yorkshire budding",
    Serves: 1,
    Ingredients: ["flour", "eggs", "milk"]
  },

  recipe4: {
    Title: "spaghetti bolognese",
    Serves: 2,
    Ingredients: ["spaghetti", "olive oil", "onions"]
  },

  recipe5: {
    Title: "Chocalate cookies",
    Serves: 4,
    Ingredients: ["sugar", "butter", "flour", "eggs"]
  }
} 


console.log(favoriteRecipes.recipe1.Title);
console.log(`Serves: ${favoriteRecipes.recipe1.Serves}`);
console.log(`Ingredients: ${favoriteRecipes.recipe1.Ingredients}`);

console.log(favoriteRecipes.recipe2.Title);
console.log(`Serves: ${favoriteRecipes.recipe2.Serves}`);
console.log(`Ingredients: ${favoriteRecipes.recipe2.Ingredients}`);

console.log(favoriteRecipes.recipe3.Title);
console.log(`Serves: ${favoriteRecipes.recipe3.Serves}`);
console.log(`Ingredients: ${favoriteRecipes.recipe3.Ingredients}`);

console.log(favoriteRecipes.recipe4.Title);
console.log(`Serves: ${favoriteRecipes.recipe4.Serves}`);
console.log(`Ingredients: ${favoriteRecipes.recipe4.Ingredients}`);

console.log(favoriteRecipes.recipe5.Title);
console.log(`Serves: ${favoriteRecipes.recipe5.Serves}`);
console.log(`Ingredients: ${favoriteRecipes.recipe5.Ingredients}`);

