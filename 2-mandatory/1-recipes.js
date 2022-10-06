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

const logRecipe = (recipe) => {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.servings}`);
  console.log("Ingredients:");
  recipe.ingredients.forEach((ingredient) => console.log(ingredient));
}

let recipe1 = {
  title: "pizza",
  servings: 1,
  ingredients: ["bread", "ham", "cheese"]
};

let recipe2 = {
  title: "sandwich",
  servings: 1,
  ingredients: ["baguette", "sausage", "ketchup", "mustard"],
};

let recipe3 = {
  title: "chicken",
  servings: 2,
  ingredients: ["cabbage", "tomato", "cucumber", "mayo"],
};

logRecipe(recipe1);
logRecipe(recipe2);
logRecipe(recipe3);