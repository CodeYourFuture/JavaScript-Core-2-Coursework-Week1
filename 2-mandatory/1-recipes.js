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
let favRecipe = {
  recipeOne: {
    title: "Mole",
    serves: 2,
    ingredients: ["cinnamon", "Cumin", "Cocoa"],
  },

  recipeTwo: {
    title: "Pasta",
    serves: 1,
    ingredients: ["Pasta", "Cheese", "Veggies"],
  },
  recipeThree: {
    title: "Rice",
    serves: 3,
    ingredients: ["Brown Rice", "seasonings", "Oil"],
  },
  recipeFour: {
    title: "Chunky Cookie",
    serves: 4,
    ingredients: ["flour", "Sugar", "Egg", "Butter", "Choclate"],
  },
  recipeFive: {
    title: "Smoothie",
    serves: 2,
    ingredients: ["Fruits", "ice", "honey"],
  },

  getRecipe: function (recipe) {
    console.log(this[recipe]["title"]);
    console.log("serves: " + this[recipe]["servings"]);
    console.log("ingredients:");
    this[recipe]["ingredients"].map((a) => console.log(a) + "\n");
    console.log("-".repeat(5));
  },
};

favRecipe.getRecipe("RecipeOne");
favRecipe.getRecipe("RecipeTwo");
favRecipe.getRecipe("RecipeThree");
favRecipe.getRecipe("RecipeFour");
favRecipe.getRecipe("RecipeFive");
