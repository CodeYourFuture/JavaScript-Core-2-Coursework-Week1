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

let myFavoriteRecipe1 = {
  title: "Felafel",
  serving: 2, 
  ingredients: [
    "Chicken", "Salad", "Patatos",
  ]
}
let myFavoriteRecipe2 = {
  title: "Soup",
  serving: 6, 
  ingredients: [
    "Chicken", "Water", "Lentil",
  ]
}
let myFavoriteRecipe3 = {
  title: "Pizza",
  serving: 5, 
  ingredients: [
    "Dough", "Cheese", "Toppings",
  ]
}
let myFavoriteRecipe4 = {
  title: "Kebap",
  serving: 3, 
  ingredients: [
    "Lamp", "Patatos", "Tomatos",
  ]
}
let myFavoriteRecipe5 = {
  title: "Rice",
  serving: 4, 
  ingredients: [
    "Rice", "Salt", "Oil",
  ]
}
function printRecipe(recipe) {
console.log(recipe.title);
console.log(`Serving: ${recipe.serving}`);
console.log("Ingredients:");
  for (let index = 0; index < recipe.ingredients.length; index++) {
  const element = recipe.ingredients[index];
  console.log(element);
}
}

printRecipe(myFavoriteRecipe1);
printRecipe(myFavoriteRecipe2);
printRecipe(myFavoriteRecipe3);
printRecipe(myFavoriteRecipe4);
printRecipe(myFavoriteRecipe5);

