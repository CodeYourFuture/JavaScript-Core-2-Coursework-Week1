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
    title: "Cheesecake",
    serving: 12,
    ingredients: [
      "biscuits",
      "cream cheese",
      "double cream",
      "sugar",
      "vanilla essence",
    ],
  },

  recipe2: {
    title: "Brownies",
    serving: 10,
    ingredients: ["cocoa powder", "butter", "eggs", "sugar"],
  },

  recipe3: {
    title: "Cupcakes",
    serving: 10,
    ingredients: ["sugar", "flour", "butter", "eggs"],
  },

  recipe4: {
    title: "Eggnog",
    serving: 5,
    ingredients: ["eggs", "milk", "vanilla essence", "sugar"],
  },

  recipe5: {
    title: "Cookies",
    serving: 20,
    ingredients: ["flour", "eggs", "sugar", "butter"],
  },
};

for (const eachRecipe in myRecipe) {
  for (const [key, value] of Object.entries(myRecipe[eachRecipe])) {
    console.log(`${key}: ${value}`);
  }
}
