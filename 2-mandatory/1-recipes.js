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

class Recipe {
  constructor(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
  }
}

const recipeOne = new Recipe("baklava", 8, ["yufka", "walnuts", "butter"]);

const recipeTwo = new Recipe("tavukgogsu", 10, [
  "chicken breast",
  "sugar",
  "butter",
  "flour",
  "milk",
]);

const recipeThree = new Recipe("karniyarik", 5, [
  "aubergine",
  "tomato",
  "lamb mince",
  "parsley",
]);

const recipeFour = new Recipe("kapuska", 4, [
  "white cabbage",
  "pork mince",
  "onions",
]);

const recipeFive = new Recipe("iskender", 5, [
  "lamb",
  "more lamb",
  "extra lamb",
  "yogurt",
]);

const favRecipes = [recipeOne, recipeTwo, recipeThree, recipeFour, recipeFive];

favRecipes.forEach((recipe) => {
  console.log(`${recipe.title.charAt(0).toUpperCase()}${recipe.title.slice(1)}`);
  console.log(`Serves: ${recipe.servings}`);
  console.log(`Ingredients: \n${recipe.ingredients.join("\r\n")}`);
});
