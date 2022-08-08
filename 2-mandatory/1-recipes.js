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

let theRecipeCard = {
  "1.Dessert": {
    title: "Peppermint Tart",
    servings: 18,
    ingredients: [
      "tennis biscuits",
      "flake",
      "caramel",
      "peppermint chocolate",
      "orley whip",
    ],
    logRecipe: function () {
      console.log(this.title);
      console.log(`Serves: ${this.servings}`);
      console.log("Ingredients: ");
      this.ingredients.forEach((el) => console.log(el));
    },
  },
  "2.Dessert": {
    title: "Cremora Tart",
    servings: 18,
    ingredients: [
      "tennis biscuits",
      "flake",
      "lemon juice",
      "cremora milkpowder",
      "condensed milk",
    ],
    logRecipe: function () {
      console.log(this.title);
      console.log(`Serves: ${this.servings}`);
      console.log("Ingredients: ");
      this.ingredients.forEach((el) => console.log(el));
    },
  },
  "3.Supper": {
    title: "Chicken Lasagne",
    servings: 2,
    ingredients: [
      "lasagne",
      "chicken",
      "cheese sauce",
      "cream cheese",
      "onions",
    ],
    logRecipe: function () {
      console.log(this.title);
      console.log(`Serves: ${this.servings}`);
      console.log("Ingredients: ");
      this.ingredients.forEach((el) => console.log(el));
    },
  },
  "4.Lunch": {
    title: "Egg Pumpkin Sandwhiches",
    servings: 2,
    ingredients: [
      "toast",
      "fried egg",
      "mashed pumpkin",
      "sweet mustard",
      "mayonaise",
    ],
    logRecipe: function () {
      console.log(this.title);
      console.log(`Serves: ${this.servings}`);
      console.log("Ingredients: ");
      this.ingredients.forEach((el) => console.log(el));
    },
  },
  "5.Supper": {
    title: "Steak",
    servings: 4,
    ingredients: ["steak", "lemon juice", "aromat"],
    logRecipe: function () {
      console.log(this.title);
      console.log(`Serves: ${this.servings}`);
      console.log("Ingredients: ");
      this.ingredients.forEach((el) => console.log(el));
    },
  },
};

theRecipeCard["1.Dessert"].logRecipe();
theRecipeCard["2.Dessert"].logRecipe();
theRecipeCard["3.Supper"].logRecipe();
theRecipeCard["4.Lunch"].logRecipe();
theRecipeCard["5.Supper"].logRecipe();
