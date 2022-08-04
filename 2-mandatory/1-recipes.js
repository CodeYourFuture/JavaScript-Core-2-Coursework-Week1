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
let favoriteRecipe1 = {
  title: "Pancakes",
  servings: 4,
  ingredients: [
    "eggs",
    "flour",
    "coconut oil",
    "baking powder",
    "sugar",
    "milk",
  ],
};
console.log(favoriteRecipe1.title);
console.log(`Serves: ${favoriteRecipe1.servings}`);
favoriteRecipe1.ingredients.forEach((thing) => {
  console.log(thing);
});

let favoriteRecipe2 = {
  title: "Pasta",
  servings: 4,
  ingredients: ["pasta", "oil", "cheese", "milk", "salt"],
};
console.log(favoriteRecipe2.title);
console.log(`Serves: ${favoriteRecipe2.servings}`);
favoriteRecipe2.ingredients.forEach((thing) => {
  console.log(thing);
});

let favoriteRecipe3 = {
  title: "Oats",
  servings: 4,
  ingredients: ["oats", "sugar", "cinnamon", "milk", "salt"],
};
console.log(favoriteRecipe3.title);
console.log(`Serves: ${favoriteRecipe3.servings}`);
favoriteRecipe3.ingredients.forEach((thing) => {
  console.log(thing);
});

let favoriteRecipe4 = {
  title: "Curry",
  servings: 4,
  ingredients: [
    "meat",
    "oil",
    "onion",
    "tumeric",
    "salt",
    "bay leaves",
    "cardamon",
  ],
};
console.log(favoriteRecipe4.title);
console.log(`Serves: ${favoriteRecipe4.servings}`);
favoriteRecipe4.ingredients.forEach((thing) => {
  console.log(thing);
});

let favoriteRecipe5 = {
  title: "Potato salad",
  servings: 4,
  ingredients: ["potatoes", "green pepper", "onions", "mayo", "salt"],
};
console.log(favoriteRecipe5.title);
console.log(`Serves: ${favoriteRecipe5.servings}`);
favoriteRecipe5.ingredients.forEach((thing) => {
  console.log(thing);
});
