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
  title: "Ash",
  Serves: 4,
  Ingredients: ["Onions", "Parsely", "Mixed beans", "Mint"],
};
console.log(recipe1.title);
console.log(`Serves: ${recipe1.Serves}`);
console.log(`Ingredients:\n ${recipe1.Ingredients.join("\r\n")}`);
