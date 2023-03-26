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

let banoffee = {
  title: "Banoffee",
  servings: 7,
  ingredients: [
    "bananas",
    "biscuits",
    "butter",
    "condensed milk",
    "sugar",
    "cream",
  ],
};
console.log(banoffee.title);
console.log("Serves: " + banoffee.servings);
console.log("Ingredients:");
for (let i = 0; i < banoffee.ingredients.length; i++) {
  console.log(banoffee.ingredients[i]);
}
