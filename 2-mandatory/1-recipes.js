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

let cake = {
  title: "Cake",
  servings: 2,
  ingredients: ["cheesecake", "milk"],
};

console.log(cake.title);
console.log("Serves:" + " " + cake.servings);
console.log("Ingredients:" + " " + cake.ingredients.join(", "));

let yogurt = {
  title: "Yogurt",
  servings: 3,
  ingredients: ["milk", "water"],
};

console.log(yogurt.title);
console.log("Serves:" + " " + yogurt.servings);
console.log("Ingredients:" + " " + yogurt.ingredients.join(","));

let cinnamon = {
  title: "Cinnamon",
  servings: 1,
  ingredients: ["cinness", "cin"],
};

console.log(cinnamon.title);
console.log("Serves:" + " " + cinnamon.servings);
console.log("Ingredients:" + " " + cinnamon.ingredients.join(", "));

let cocoa = {
  title: "Cocoa",
  servings: 2,
  ingredients: ["cocoa"],
};

console.log(cocoa.title);
console.log("Serves:" + " " + cocoa.servings);
console.log("Ingredients:" + " " + cocoa.ingredients.join(", "));

let powder = {
  title: "Powder",
  servings: 1,
  ingredients: ["water"],
};

console.log(powder.title);
console.log("Serves:" + " " + powder.servings);
console.log("Ingredients:" + " " + powder.ingredients.join(", "));
