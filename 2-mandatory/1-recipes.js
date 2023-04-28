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
let TheRecipeCard = {}
TheRecipeCard.title = "Items mix :D"
TheRecipeCard.Serves = 2;


TheRecipeCard.Ingredients = []

let ingr = ["item1","item2","item3","item4"]

ingr.forEach(element => {
  TheRecipeCard.Ingredients.push(element)
})
console.log(TheRecipeCard.title)
console.log(`Serves: ${TheRecipeCard.Serves}`)
TheRecipeCard.Ingredients.map(property => {console.log(property)})
