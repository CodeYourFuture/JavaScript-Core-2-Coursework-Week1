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
  title:'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa', 'garlic', 'pepper']
};
console.log(recipe1.title);
console.log(recipe1.servings);
recipe1.ingredients.forEach((thing) => {
  console.log(thing)});


let recipe2 = {
  title: 'Mole1',
  servings: 3,
  ingredients: ['flour', 'cinnamon', 'pepper', 'garlic', 'rasberry']
};
console.log(recipe2.title);
console.log(recipe2.servings);
recipe2.ingredients.forEach((thing) => {console.log(thing)});

let recipe3 = {
  title: 'Mole2',
  servings: 4,
  ingredients: ['berry', 'egg', 'cake', 'ice', 'cream']
};
console.log(recipe3.title);
console.log(recipe3.servings);
recipe3.ingredients.forEach((thing) => {console.log(thing)});

let recipe4 = {
  title: 'Mole3',
  servings: 5,
  ingredients: ['apple', 'orange', 'grapes', 'muz', 'ber']
};
console.log(recipe4.title);
console.log(recipe4.servings);
recipe4.ingredients.forEach((thing) => {console.log(thing)});

let recipe5 = {
  title: 'Mole4',
  servings: 6,
  ingredients: ['lola', 'injera', 'gra', 'rala', 'coca']
};
console.log(recipe5.title);
console.log(recipe5.servings);
recipe5.ingredients.forEach((thing) => {console.log(thing)});
