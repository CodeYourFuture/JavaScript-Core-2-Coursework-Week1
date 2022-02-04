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

  LOGIC

*/

let myRecipie = {
  //Key : values = which might be a string booleans, numbers
  title: `cake`,
  servings: 2,
  ingredients: [`cinnamon`, `cumin `, `cocoa`],
};

// data object. property
console.log(myRecipie.title);
console.log(`serves:` + myRecipie.servings);
console.log(`Ingredients:`);

for (ingredient of myRecipie.ingredients) console.log(ingredient);
