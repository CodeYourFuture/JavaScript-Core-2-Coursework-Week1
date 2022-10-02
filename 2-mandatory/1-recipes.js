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

let chicken = {
  title:"chicken",
  serves:4,
  ingredients: ["chicken","potatoes"]
}

let pork = {
  title:"pork",
  serves:4,
  ingredients: ["pork","tomtoes"]
}

let steak = {
  title:"steak",
  serves:2,
  ingredients: ["beef","pepper"]
}

let lamb = {
  title:"lamb",
  serves:3,
  ingredients: ["lamb","garlic"]
}

let fish = {
  title:"fish",
  serves:6,
  ingredients: ["fish","onion"]
}
console.log(Object.entries(fish));

function printRecipe(obj) {
  for ([key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}

printRecipe(chicken);
printRecipe(pork);
printRecipe(steak);
printRecipe(lamb);
printRecipe(fish);


