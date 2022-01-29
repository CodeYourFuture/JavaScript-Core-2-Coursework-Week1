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
let recipeOne = {
  title: "My Pasta Recipe",
  Serves: 5,
  Ingredients: ["Tomatoes", "Oil", "Salt", "Spaghetti"],
};

console.log(recipeOne.title);
console.log("Serves:" + " " + "\n" + recipeOne.Serves);
console.log("Ingredients:" + " " + "\n" + recipeOne.Ingredients.join("\n"));


let recipeTwo = {
  title: "Chocolate Cake",
  Serves: 10,
  Ingredients: ["Flour", "Eggs", "Sugar", "Milk" , "Dark Chocolate"],
};

console.log(recipeTwo["title"]);
console.log("Serves:" + " " + "\n" + recipeTwo["Serves"]);
console.log("Ingredients:" + " " + "\n" + recipeTwo["Ingredients"].join("\n"));

let recipeThree = {
  title: "Summer Punch",
  Serves: 6,
  Ingredients: ["Rum", "Lime", "Orange Juice", "Ice", "Liquor"],
};

console.log(recipeThree["title"]);
console.log("Serves:" + " " + "\n" + recipeThree["Serves"]);
console.log("Ingredients:" + " " + "\n" + recipeThree["Ingredients"].join("\n"));


let recipeFour = {
  title: "Grilled Chicken",
  Serves: 10,
  Ingredients: ["Chicken Breast", "Carrots", "Onions", "Black Pepper", "Salt"],
};

console.log(recipeFour.title);
console.log("Serves:" + " " + "\n" + recipeFour.Serves);
console.log("Ingredients:" + " " + "\n" + recipeFour.Ingredients.join("\n"));

let recipeFive = {
  title: "Salad",
  Serves: 3,
  Ingredients: ["Lettuce", "Eggs", "Cream Salad", "Sweetcorn", "Mustard"],
};

console.log(recipeFive.title);
console.log("Serves:" + " " + "\n" + recipeFive.Serves);
console.log("Ingredients:" + " " + "\n" + recipeFive.Ingredients.join("\n"));