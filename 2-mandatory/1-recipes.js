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
let vicSponge = {
  title: 'vicSponge',
  servings: 5,
  ingredients: ['sugar', 'eggs', 'flour']
};
console.log(vicSponge.title)
console.log('serves: ' + vicSponge.servings)
vicSponge.ingredients.forEach(x => console.log(x))

let lemonCake = {
  title: 'lemonCake',
  servings: 5,
  ingredients: ['sugar', 'eggs', 'flour']
};
console.log(lemonCake.title)
console.log('serves: ' + lemonCake.servings)
lemonCake.ingredients.forEach(x => console.log(x))

let fruitCake = {
  title: 'fruitCake',
  servings: 5,
  ingredients: ['sugar', 'eggs', 'flour']
};
console.log(fruitCake.title)
console.log('serves: ' + fruitCake.servings)
fruitCake.ingredients.forEach(x => console.log(x))

let carrotCake = {
  title: 'cake',
  servings: 5,
  ingredients: ['sugar', 'eggs', 'flour']
};
console.log(carrotCake.title)
console.log('serves: ' + carrotCake.servings)
carrotCake.ingredients.forEach(x => console.log(x))

let bananaLoaf = {
  title: 'bananaLoaf',
  servings: 5,
  ingredients: ['sugar', 'eggs', 'flour']
};
console.log(bananaLoaf.title)
console.log('serves: ' + bananaLoaf.servings)
bananaLoaf.ingredients.forEach(x => console.log(x))