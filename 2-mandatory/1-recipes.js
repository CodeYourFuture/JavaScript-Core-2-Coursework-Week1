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
let myRecipe = {
  recipe1: {
    title: "Oatcake",
    serving: 4,
    ingredients: [
      "plain cheese",
      "cream",
      "stevia",
      "vanilla essence",
    ],
  },

  recipe2: {
    title: " White Chocolate Brownies",
    serving: 4,
    ingredients: ["eggs","white chocolate", "butter",  "sugar"],
  },

  recipe3: {
    title: "Curry",
    serving: 4,
    ingredients: ["onion", "masala", "tomatoes", "salt"],
  },

  recipe4: {
    title: "biryani",
    serving: 4,
    ingredients: ["rice", "mix-vegetables", "masala", "olive oil"],
  },

  recipe5: {
    title: "ice cream",
    serving: 4,
    ingredients: ["cream", "eggs", "sugar", "vanilla essence"],
  },
};

function receipeKing(all) {
  for(each in all) {
    console.log(`${each}: ${all[each]}`);
  }
}
receipeKing(myRecipe.recipe1);
receipeKing(myRecipe.recipe2);
receipeKing(myRecipe.recipe3);
receipeKing(myRecipe.recipe4);
receipeKing(myRecipe.recipe5);