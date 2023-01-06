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

let favoriteRecipeOne = {
  title: "Banana Bread ",
  servings: 8,
  ingredients: [
    "butter",
    "caster sugar",
    "eggs",
    "flour",
    "baking powder",
    "bananas",
  ],
};
console.log(favoriteRecipeOne.title);
console.log("serves: " + favoriteRecipeOne.servings);
console.log("Ingredients: ");
console.log(favoriteRecipeOne.ingredients[0]);
console.log(favoriteRecipeOne.ingredients[1]);
console.log(favoriteRecipeOne.ingredients[2]);
console.log(favoriteRecipeOne.ingredients[3]);
console.log(favoriteRecipeOne.ingredients[4]);
console.log(favoriteRecipeOne.ingredients[5]);

let favoriteRecipeTwo = {
  title: "blueberry muffin",
  servings: 12,
  ingredients: [
    "butter",
    "golden caster sugar",
    "eggs",
    "milk",
    "flour",
    "baking powder",
    "blueberries",
  ],
};

console.log(favoriteRecipeTwo.title);
console.log("serves: " + favoriteRecipeTwo.servings);
console.log("ingredients: ");
favoriteRecipeTwo.ingredients.forEach((element) => {
  console.log(element);
});
