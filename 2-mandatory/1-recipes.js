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

let favRecipe1 = {
  name: "salads",
  servings: "services: " + 2,
  ingredients: ["tomato", "cucamber", "lemon", "avocado", "sweetcorn", "eggs"]
}
function ingredientPrinting(favRecipe1) {
  console.log("ingredients: ")
  for ( let i = 0; i < favRecipe1.ingredients.length; i++) {
    console.log(favRecipe1.ingredients[i]);
  }
}


console.log(favRecipe1.name);
console.log(favRecipe1.servings);
ingredientPrinting(favRecipe1);

