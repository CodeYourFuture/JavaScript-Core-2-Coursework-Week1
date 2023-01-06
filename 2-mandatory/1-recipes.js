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
let recipe1 = {
  title: "Semolina Halva",
  servings: 4,
  ingredients: ["semolina", "olive oil", "water", "sugar"]
}

let recipe2 = {
  title: "Houmous",
  servings: 6,
  ingredients: ["chickpeas", "sesame paste", "vegetable oil", "lemon"]
}

let recipe3 = {
  title: "George's main",
  servings: 5,
  ingredients: ["brown rice", "red lentils", "onions"]
}

let recipe4 = {
  title: "Avocado snack",
  servings: 1,
  ingredients: ["avocado", "oregano", "salt"]
}

console.log(recipe4.title);
console.log("Serves: " + recipe4.servings);
console.log("Ingredients: " + "\n" + recipe4.ingredients.join("\n"))
// console.log("Ingredients: " + "\n" + recipe3.ingredients);
// for (i=0; i < recipe3.ingredients.length; i++) {
//   console.log(recipe3.ingredients[i])
// }

