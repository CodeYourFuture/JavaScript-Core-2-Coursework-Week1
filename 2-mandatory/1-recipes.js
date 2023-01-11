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

let recipe1 = {
  title: 'Classic Muffuletta',
  servings: 3,
  ingredients: ['anchovy fillet', 'celery', 'carrot', 'oregano'],
}
console.log(recipe1.title)
console.log(`Serves: ${recipe1.servings}`)
console.log('Ingredients: ')
console.log(recipe1.ingredients[0])
console.log(recipe1.ingredients[1])
console.log(recipe1.ingredients[2])
console.log(recipe1.ingredients[3])

let recipe2 = {
  title: 'Smoked duck',
  servings: 4,
  ingredients: ['duck breasts', 'beetroot', 'bitter leaves', 'hazelnuts'],
}
console.log(recipe2.title)
console.log(`Serves: ${recipe2.servings}`)
console.log('Ingredients: ')
console.log(recipe2.ingredients[0])
console.log(recipe2.ingredients[1])
console.log(recipe2.ingredients[2])
console.log(recipe2.ingredients[3])