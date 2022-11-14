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
let Recipe1 = {
  Title: "Waina",
  Serves: 2,
  Ingredients: [
    "rice",
    "water",
    "yeast",
    "miyan taushe",
    "meat",
    "oil"
  ],
};
let Recipe2 = {
  Title: "Pounded Yam",
  Serves: 1,
  Ingredients: [
    "Yam or Yam flour",
    "water",
    "Egusi soup"
  ],
};
let Recipe3 = {
  Title: "Coated Yam",
  Serves: 1,
  Ingredients: [
    "Yam",
    "Eggs",
    "oil",
    "salt",
  ],
};
let Recipe4 = {
  Title: "Peppered Fish",
  Serves: 1,
  Ingredients: ["Fish", "chilli pepper", "oil", "vegetables", "spices"],
};
let Recipe5 = {
  Title: "Puff Puff",
  Serves: 2,
  Ingredients: [
    "whole flour",
    "milk",
    "sugar",
    "water",
    "oil"
  ],
};

function favoriteRecipe(obj) {
  for ([key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
favoriteRecipe(Recipe1);
favoriteRecipe(Recipe2);
favoriteRecipe(Recipe3);
favoriteRecipe(Recipe4);
favoriteRecipe(Recipe5);
