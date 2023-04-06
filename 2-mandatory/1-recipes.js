/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)
  */
  const recipe = {
    title: "food",
    servings: 9,
    ingredients: ["salt", "apple", "jelly"],
  }
  /*
  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/

console.log(recipe.title)
console.log(recipe.servings)

recipe.ingredients.forEach((ingredient) => console.log(ingredient));

// write code here