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

function Recipe(titleRecipe, servesRecipe, ingredientsRecipe) {
  (this.titleRecipe = titleRecipe),
    (this.servesRecipe = servesRecipe),
    (this.ingredientsRecipe = ingredientsRecipe);
}

const recipeOne = new Recipe("Meat with onion", 4, ["meat", "onion"]);
const recipeTwo = new Recipe("Chicken with tomato", 2, ["chicken", "tomato"]);
const recipeThree = new Recipe("Rice with egg", 2, ["rice", "egg"]);
const recipeFour = new Recipe("Bread with tuna", 2, ["bread", "tuna"]);
const recipeFive = new Recipe("Salmon with onion", 6, ["salmon", "onion"]);

const recipes = [recipeOne, recipeTwo, recipeThree, recipeFour, recipeFive];

recipes.forEach((element) => {
  console.log(element.titleRecipe);
  console.log(`Serves: ${element.servesRecipe}`);
  console.log(
    `Ingredients: \n${element.ingredientsRecipe[0]}\n${element.ingredientsRecipe[1]}\n`
  );
});
