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
let favoriteRecipe = {
  recipe1: {
    title: "veg pasta",
    serves: 8,
    ingredients: ["pasta", "water", "spices", "oil", "vegetables", "pasta sauce"],
  },

  recipe2: {
    title: "tea",
    serves: 4,
    ingredients: ["water", "sugar", "tea-bag", "milk"],
  },

  recipe3: {
    title: "coffee",
    serves: 2,
    ingredients: ["coffee powder", "water", "ginger powder"],
  },

  recipe4: {
    title: "avacado sandwich",
    serves: 4,
    ingredients: ["avacado", "bread", "onion", "tomato", "salt"],
  },

  recipe5: {
    title: "rice",
    serves: 2,
    ingredients: ["rice", "black paper", "salt", "water"]
  }
};
console.log(myFavoriteRecipes.recipe1);
console.log(myFavoriteRecipes.recipe2);
console.log(myFavoriteRecipes.recipe3);
console.log(myFavoriteRecipes.recipe4);
console.log(myFavoriteRecipes.recipe5);