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
  Title: "Menemen",
  Serves: 2,
  Ingredients: ["4 tomatoes ", "2 eggs", "Half onion", "Some butter"],
};

let Recipe2 = {
  Title: "Homemade Fruit Yogurt",
  Serves: 1,
  Ingredients: [
    "1/2 cup yogurt with active live cultures",
    "¼2 cups ripe fruit",
    "1 teaspoon turbinado sugar",
  ],
};
let Recipe3 = {
  Title: "Egg burrito Wraps",
  Serves: 3,
  Ingredients: [
    "1 tablespoon olive oil",
    "6 large eggs",
    "1 teaspoon salt",
    "6 medium flour tortillas",
    "1/4 cup onion",
    "1 cup bell pepper",
  ],
};
let Recipe4 = {
  Title: "Classic Jacket Potatoes",
  Serves: 2,
  Ingredients: [
    "4 large baking potatoes",
    "1 table spoon olive oil",
    "50g cheddar, grated",
    "4 spring onions, thinly sliced",
    "200ml soured cream",
  ],
};
let Recipe5 = {
  Title: "Green goddess salad",
  Serves: 2,
  Ingredients: [
    "4 Baby Gem lettuces",
    "3 table spoon  olive oil",
    "2 cucumber",
    "1 onion",
  ],
};

function printRecipes(recipes) {
  for ([key, value] of Object.entries(recipes)) {
    console.log(`${key}: ${value}`);
  }
}
printRecipes(Recipe1);
printRecipes(Recipe2);
printRecipes(Recipe3);
printRecipes(Recipe4);
printRecipes(Recipe5);
