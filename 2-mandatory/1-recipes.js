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
let favoriteRecipe = {
  recipe1: {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  recipe2: {
    title: "Pesto Pasta",
    servings: 1,
    ingredients: ["pasta", "basil leaves", "olive oil", "parmesan cheese"],
  },
  recipe3: {
  title: "Chicken Curry",
  servings: 6,
  ingredients: ["chicken", "tomatoes", "salt", "oil"],
  },
};

for (let recipeName in favoriteRecipe) {
  console.log(favoriteRecipe[recipeName].title);
  console.log(`Serves: ${favoriteRecipe[recipeName].servings}`);
  console.log("Ingredients:");
  for (let item of favoriteRecipe[recipeName].ingredients) {
    console.log(item);
  }
  console.log("--------------------------------");
}
