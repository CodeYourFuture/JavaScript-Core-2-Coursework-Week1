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

let recipe = {
  title : "Omlette",
  servings:4,
  Ingredients:["eggs","butter","salt"]

}

let recipeTwo ={
  title: "Pasta",
  Serving:2,
  Ingredients:["pasta", "meat mince", "oil","water"]
}
console.log(recipe);
console.log(recipe["title"])
console.log(`Serving: ${recipe.servings}`)
console.log("Ingredients:")
recipe.Ingredients.forEach(Ingredient => console.log(Ingredient))

// if we want to do it with one function//

function recipeDetails(recipe){
  console.log(`${recipe.title}\nServices: ${recipe.servings}\nIngredients:\n${recipe.Ingredients.join('\n')}`);
}

recipeDetails(recipe)
recipeDetails(recipeTwo)