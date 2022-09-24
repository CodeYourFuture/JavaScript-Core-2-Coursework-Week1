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

// write code here  Done✔️
let favRecipe1 = {
  serves: 2, 
  ingredients: ['cinnamon', 'cumin', 'cocoa'], 
  oven: true 
} 

let favRecipe2 = {
  serves: 4, 
  ingredients: ['suger', 'chocolate', 'eggs', 'milk'], 
  oven: true, 
  blend: '5 minutes'
}

let favRecipe3 = {
  serves: 3, 
  ingredient: ['tomato', 'onion', 'eggs', 'cheese'], 
  oven: false, 
  cook: '10 minutes'
}

let favRecipe4 = {
  serves: 2, 
  ingredient: ['pasta', 'white cream', 'chicken breast', 'vegetables'], 
  oven: true, 
  cook: '6 minutes'
}

let favRecipe5 = {
  serves: 1, 
  ingredient: ['avocado', 'mango pulp', 'milk', 'ice', 'honey'], 
  oven: false, 
  blend: '4minutes'
}

console.log(Object.keys(favRecipe1).join("\r\n")); 
console.log(favRecipe1.ingredients.join("\r\n")); 
