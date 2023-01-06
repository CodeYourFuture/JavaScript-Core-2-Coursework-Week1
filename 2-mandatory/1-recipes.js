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
favoriteRecipes = {
  recipe1: {
    title: "Pancakes",
    servings: 3,
    ingredients: [
      "100g plain flour",
      "2 large eggs",
      "300ml milk",
      "1 tbsp sunflower",
    ],
  },
  recipe2: {
    title: "Salad",
    servings: 2,
    ingredients: ["3 onions", "2 cucumbers", "green salad leafs", "salt"],
  },
  recipe3: {
    title: "Avocado and Eggs",
    servings: 1,
    ingredients: ["1 avocado", "2 Eggs", "salt"],
  },
  recipe4: {
    title: "Polenta with sour cream and cottage cheese",
    servings: 3,
    ingredients: ["100 cornmeal", "50g butter", "salt"],
  },
  recipe4: {
    title: "Cabbage Rolls",
    servings: 5,
    ingredients: [
      "500g minced meat",
      "tomato sauce",
      "cabbage leaves",
      "and many more",
    ],
  },
};

function printRecipe(recipe) {
  for (each in recipe) {
    console.log(`\t` + `${each}: ${recipe[each]}`);
  }
  console.log("\n");
}
printRecipe(favoriteRecipes.recipe1);
printRecipe(favoriteRecipes.recipe2);
printRecipe(favoriteRecipes.recipe3);
printRecipe(favoriteRecipes.recipe4);
