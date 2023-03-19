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

const recipe1 = {
  title: "Strawberry Banana Smoothie",
  servings: 2,
  ingredients: ["strawberries", "banana", "orange juice"],
};

const recipe2 = {
  title: "Mixed Berry Smoothie",
  servings: 2,
  ingredients: ["mixed berries", "banana", "almond milk"],
};

const recipe3 = {
  title: "Mango Pineapple Smoothie",
  servings: 2,
  ingredients: ["mango", "pineapple", "coconut milk"],
};

const recipe4 = {
  title: "Peach Raspberry Smoothie",
  servings: 2,
  ingredients: ["peaches", "raspberries", "vanilla yogurt"],
};

const recipe5 = {
  title: "Kiwi Strawberry Smoothie",
  servings: 2,
  ingredients: ["kiwi", "strawberries", "apple juice"],
};

const smoothieRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5];

for (const recipe of smoothieRecipes) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.servings}`);
  console.log("Ingredients:");
  for (const ingredient of recipe.ingredients) {
    console.log(ingredient);
  }
  console.log("\n");
  console.log("🍹🍹🍹🍹🍹");
  console.log("\n");
}
