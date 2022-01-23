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

let myFavoriteRecipe = {
  Recipe1: {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  Recipe2: {
    title: "Polenta",
    servings: 4,
    ingredients: ["polenta", "butter", "cheese"],
  },
  Recipe3: {
    title: "Spinach Enchiladas",
    servings: 5,
    ingredients: ["spinach", "garlic", "onion", "cheese", "corn tortillas"],
  },
  Recipe4: {
    title: "Carrot Rice",
    servings: 6,
    ingredients: ["rice", "roasted peanuts", "onion", "carrot", "cilantro"],
  },
  Recipe5: {
    title: "Mushroom Chicken",
    servings: 2,
    ingredients: ["chicken breast", "mushroom", "butter"],
  },
  getRecipe: function (recipe) {
    console.log(this[recipe]["title"]);
    console.log("Serves: " + this[recipe]["servings"]);
    console.log("Ingredients:");
    this[recipe]["ingredients"].map((a) => console.log(a) + "\n");
    console.log("-".repeat(50));
  },
};

myFavoriteRecipe.getRecipe("Recipe1");
myFavoriteRecipe.getRecipe("Recipe2");
myFavoriteRecipe.getRecipe("Recipe3");
myFavoriteRecipe.getRecipe("Recipe4");
myFavoriteRecipe.getRecipe("Recipe5");
