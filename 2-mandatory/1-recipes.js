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
let recipes = {
  recipe1: {
    title: "pancake",
    serving: 4,
    ingredients: ["flour", "egg", "milk", "vanilla", "baking Powder"],
  },
  recipe2: {
    title: "eggSalad",
    serving: 2,
    ingredients: ["egg", "mayo", "lettuce", "cucumber", "tomato"],
  },
  recipe3: {
    title: "omelette",
    serving: 4,
    ingredients: ["egg", "mushroom", "pepper", "salt", "tomato"],
  },
  recipe4: {
    title: "chickenCurry",
    serving: 6,
    ingredients: ["chicken", "rice", "curry", "onion"],
  },
  recipe5: {
    title: "pizza",
    serving: 6,
    ingredients: ["flour", "water", "sauce", "cheese"],
  },
};

for (let food in recipes) {
  console.log(recipes[food].title);
  console.log(`Serves: ${recipes[food].serving}`);
  console.log("Ingredients:");
  recipes[food].ingredients.forEach((ingredient) => console.log(ingredient));
}
