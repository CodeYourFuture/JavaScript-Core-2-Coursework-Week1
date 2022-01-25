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
let kebab = {
  title: "kebab",
  servings: 1,
  ingredients: ["mince", "potato", "veg"],
};
let khoresht = {
  title: "khoresht",
  servings: 2,
  ingredients: ["lamb", "veg", "beans"],
};
let ash = {
  title: "ash",
  servings: 3,
  ingredients: ["veg", "chickpea", "chicken"],
};
let barbasel = {
  title: "barbasel",
  servings: 4,
  ingredients: ["lamb", "veg", "yogurt"],
};
let dokliw = {
  title: "dokliw",
  servings: 5,
  ingredients: ["yogurt", "veg", "pepper"],
};

function favoriteRecipe(recipe) {
  console.log(recipe["title"]);
  console.log(`Serves: ${recipe["servings"]}`);
  console.log("Ingredients:");
  recipe["ingredients"].forEach((ingredient) => {
    console.log(ingredient);
  });
  console.log();
}

favoriteRecipe(kebab);
favoriteRecipe(khoresht);
favoriteRecipe(ash);
favoriteRecipe(barbasel);
favoriteRecipe(dokliw);
