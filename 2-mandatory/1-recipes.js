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

function logRecipes(recipe) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.servings}`);
  console.log(`Ingredients: ${recipe.ingredients}`);
}

let recipe1 = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};

let recipe2 = {
  title: "Semolina Pudding",
  servings: 6,
  ingredients: [
    "3/4 cup Taystee wheat or Semolina",
    "125gram + 25gram butter",
    "2 pieces cinnamon stick",
    "3 cups milk",
    "1tspn elachie/cardamom powder",
    "1 teaspoon almond powder",
    "few strands saffron",
    "few drops egg yellow food colouring",
    "6-8 tbsp condensed milk",
    "fresh cream",
  ],
};

let recipe3 = {
  title: "Coffee",
  servings: 1,
  ingredients: [
    "2 spoons of coffee",
    "2 spoons of sugar",
    "3-4 spoons coffee creamer",
  ],
};

let recipe4 = {
  title: "Tea",
  servings: 1,
  ingredients: ["1 tea bag", "2 teaspoons of sugar", "milk"],
};

let recipe5 = {
  title: "Banana loaf",
  servings: 2,
  ingredients: [
    "butter",
    "sugar",
    "eggs",
    "bananas",
    "cake flour",
    "salt",
    "baking soda",
  ],
};

logRecipes(recipe1);

logRecipes(recipe2);

logRecipes(recipe3);

logRecipes(recipe4);

logRecipes(recipe5);
