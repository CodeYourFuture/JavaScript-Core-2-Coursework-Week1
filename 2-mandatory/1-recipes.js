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
  recipe1 = {
  title: "Mutton Stew",
  servings: 5,
  ingredients: ["Diced Mutton", "Onions", "Carrots", "Leeks", "Beef Stock", "Tomato Puree", "Red Wine"],
  },

  recipe2 = {
    title: "Carbonara",
    servings: 4,
    ingredients: ["Tangliatelle", "Eggs", "Parmiggianno", "Bacon Lardons", "Salt", "Pepper"],
  },

  recipe3 = {
    title: "Cheese & Crackers",
    servings: 1,
    ingredients: ["Cheese", "Butter", "Crackers"],
  },

  recipe4 = {
    title: "Steak & Mash",
    servings: 1,
    ingredients: ["Flat-Iron Steak", "Potatoes", "Seasoning", "Cheese"],
  },

  recipe5 = {
    title: "The Cleaner",
    servings: 1,
    ingredients: ["Lemon Juice", "Diced Ginger", "Honey", "Chilli Flakes", "Boiled Water", "Rum, or Whiskey"],
  }
};

console.log(recipes)