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
let favoriteRecipe = [{
        title: "Ash reshteh",
        servings: 5,
        ingredients: [Adas, loobiya, reshteh, sabzi, kashk],
    },
    {
        title: "kotlet",
        servings: 4,
        ingredients: [sibzamini, tokhme morgh, zardchoobe, namak],
    }
];
favoriteRecipe.forEach(elements = > {
    console.log(elements.title);
    console.log(`serves: ${elements.servings}`);
    console.log("ingredients:");
    console.log(elements.ingredients[5]);
    console.log(elements.ingredients[4]);
    console.log(`\n`)
})