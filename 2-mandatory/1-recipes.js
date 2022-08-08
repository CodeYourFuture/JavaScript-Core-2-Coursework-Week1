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
  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  */

// write code here

let favoriteRecipes = {
  recipe1: {
    title: "Roti",
    servings: 4,
    ingredients: [
      "4 Cups of All purpose flower",
      "1 packet of Yeast",
      "2 Cups warm water",
      "2 Tablespoons of Butter",
      "1 teaspoon of salt",
    ],
  },
  logMyRecipe: function (recipe) {
    console.log(this.title);
    console.log(`Servings: ${this.servings}`);
    console.log(`Ingredients: `);
    this.ingredients.forEach((ingredient) => console.log(ingredient));
  },

  recipe2: {
    title: "Sweet French toast",
    servings: 2,
    ingredients: [
      "4 Large Eggs",
      "4 Slices of Brown or White Bread",
      "Honey Syrup",
      "Bacon",
      "Oil",
    ],
    logMyRecipe: function (recipe) {
      console.log(this.title);
      console.log(`Servings: ${this.servings}`);
      console.log(`Ingredients: `);
      this.ingredients.forEach((ingredient) => console.log(ingredient));
    },
  },

  recipe3: {
    title: "Marsmellow Choc",
    servings: 2,
    ingredients: ["8 Choc Biscuits", "4 Marsmellows"],
    logMyRecipe: function (recipe) {
      console.log(this.title);
      console.log(`Servings: ${this.servings}`);
      console.log(`Ingredients: `);
      this.ingredients.forEach((ingredient) => console.log(ingredient));
    },
  },

  recipe4: {
    title: "Chicken Curry",
    servings: 4,
    ingredients: [
      "1 KG Chicken",
      "Potatoes",
      "Green Beans",
      "1 Onion",
      "Bay Leaves",
      "Curry Powder",
      "Chicken Masala",
      "Salt",
      "Cinnamon Sticks",
      "Crushed Garlic Cloves",
      "Oil",
    ],
    logMyRecipe: function (recipe) {
      console.log(this.title);
      console.log(`Servings: ${this.servings}`);
      console.log(`Ingredients: `);
      this.ingredients.forEach((ingredient) => console.log(ingredient));
    },
  },

  recipe5: {
    title: "Easy Homemade Bread",
    servings: 12,
    ingredients: [
      "All purpose flower",
      "Yeast",
      "Warm Water",
      "Teaspoon Salt",
      "2 Tablespoons of Butter ",
      "Oil",
    ],
  },
  logMyRecipe: function (recipe) {
    console.log(this.title);
    console.log(`Servings: ${this.servings}`);
    console.log(`Ingredients: `);
    this.ingredients.forEach((ingredient) => console.log(ingredient));
  },
};

console.log(favoriteRecipes.logMyRecipe);
