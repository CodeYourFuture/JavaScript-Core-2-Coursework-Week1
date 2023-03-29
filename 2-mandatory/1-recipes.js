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
const dalRecipe = {
  title: "Tadka Dal",
  Serves: 2,
  ingredients: ["veg-oil", "cumin", "cinnamon", "salt"],


}


console.log(dalRecipe.title);
console.log("Serves" + dalRecipe.Serves);  
console.log("ingredients");
for(let i = 0; i < dalRecipe.ingredients.length; i++) {
  console.log(dalRecipe.ingredients[i]); 
}

