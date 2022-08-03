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
const recipe = {
  recipe1: {
    Title: "Lasagna",
    Serves: 3,
    Ingredients: ['Penne', 'Ground Mince', 'cheese', 'milk'],
  },
  recipe2: {
    Title: "Jamaican Jerk Chicken",
    Serves: 5,
    Ingredients: ['Chicken', 'chillies', 'onions', 'five-spice powder'],
  },
  recipe3: {
    Title: "Flat white",
    Serves: 1,
    Ingredients: ['espresso','foam-milk','sugar'],
  },
  recipe4: {
    Title: "Berry Blast Smoothie",
    Serves: 1,
    Ingredients: ['Bananas', 'mixed berries','yoghurt','milk','ice','honey'],
  },
  recipe5: {
    Title: "BLAT Sandwich",
    Serves: 2,
    Ingredients:['French baguette', 'bacon', 'lettuce','tomato','mayo'],
  }

};
console.log(recipe.recipe1);
console.log(recipe.recipe2);
console.log(recipe.recipe3);
console.log(recipe.recipe4);
console.log(recipe.recipe5);
