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
//    Recipe Card  One

console.log("\n\n");
//
let recipeCardMole = {
  title: "Mole",
  Serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};
console.log(recipeCardMole.title);
console.log(`Serves: ${recipeCardMole["Serves"]}`);
console.log("ingredients:");
recipeCardMole.ingredients.forEach((values) => console.log(values));

//    Recipe Card  Two
console.log("\n\n");
//
let recipeCardCake = {
  title: "Cake",
  Serves: 5,
  ingredients: ["chocolate", "suger", "cream", "Milk", "flour"],
};
console.log(recipeCardCake.title);
console.log(`Serves: ${recipeCardCake["Serves"]}`);
console.log("ingredients:");
recipeCardCake.ingredients.forEach((values) => console.log(values));

//    Recipe Card  Three
console.log("\n\n");
//
let recipeCardDal = {
  title: "Dal",
  Serves: 8,
  ingredients: ["lentil", "cumin", "onion", ""],
};
console.log(recipeCardDal.title);
console.log(`Serves: ${recipeCardDal["Serves"]}`);
console.log("ingredients:");
recipeCardDal.ingredients.forEach((values) => console.log(values));

//    Recipe Card  Four
console.log("\n\n");
//
let recipeCardPizza = {
  title: "Mole",
  Serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};
console.log(recipeCardPizza.title);
console.log(`Serves: ${recipeCardPizza["Serves"]}`);
console.log("ingredients:");
recipeCardPizza.ingredients.forEach((values) => console.log(values));

//    Recipe Card  Five
console.log("\n\n");
//
let recipeCardSandwich = {
  title: "Mole",
  Serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};
console.log(recipeCardSandwich.title);
console.log(`Serves: ${recipeCardSandwich["Serves"]}`);
console.log("ingredients:");
recipeCardSandwich.ingredients.forEach((values) => console.log(values));
