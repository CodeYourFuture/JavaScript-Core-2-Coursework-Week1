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

const cakeRecipe = {
  title: "chocolate cake",
  server: 6,
  ingredients: [
    "sugar",
    "egg",
    "milk",
    "cacao",
    "flour",
    "baking powder",
    "butter",
  ],
  cookTime: "40min",
};

const brownieRecipe = {
  title: "brownie",
  server: 4,
  ingredients: ["sugar", "egg", "chocolate", "flour", "butter"],
  cookTime: "30min",
};

const spinateRecipe = {
  title: "somso with spinate",
  server: 4,
  ingredients: ["solt", "egg", "spinate", "flour", "onion", "sunflower oil"],
  cookTime: "1.5hour",
};

const fishRecipe = {
  title: "fish in the oven",
  server: 5,
  ingredients: [
    "solt",
    "fish salmon",
    "carrot",
    "potato",
    "onion",
    "orange",
    "olive oil",
  ],
  cookTime: "1hour",
};

const lemonadeRecipe = {
  title: "lemonade",
  server: 4,
  ingredients: ["lemon", "mint", "water", "sugar"],
  cookTime: "15min",
};

const recipes = [
  lemonadeRecipe,
  spinateRecipe,
  fishRecipe,
  cakeRecipe,
  brownieRecipe,
];

recipes.forEach((recipe) => {
  console.log(recipe.title);
  console.log("Servise: ", recipe.server);
  console.log("Ingredients: ");
  for (const ingredient of recipe.ingredients) {
    console.log(ingredient);
  }
});
