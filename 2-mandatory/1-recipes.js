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
  title: "Chiken Kebab",
  serve: 2,
  ingredients: ["chiken", "lemon", "onion"],
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.serve}`);
console.log(`Ingredients:
${recipe1.ingredients[0]}
${recipe1.ingredients[1]}
${recipe1.ingredients[2]}`);

const recipe2 = {
  title: "Chicken kebab",
  serve: 2,
  ingredients: ["chiken", "lemon", "onion"]

};
console.log(recipe2.title);
console.log(`serve: ${recipe2.serve}`);
console.log(`ingredients:
${recipe2.ingredients[0]}
${recipe2.ingredients[1]}
${recipe2.ingredients[2]}`);

const recipe3 = {
  title: "Chiken Kebab",
  serve: 3,
  ingredients: ["chiken", "lemon","onion"],
};

console.log(recipe3.title);
console.log(recipe3.serve)
console.log(`ingredient:
${recipe3.ingredients[0]}
${recipe3.ingredients[1]}
${recipe3.ingredients[2]}`);

const recipe4 = {
  title: "Chiken Kebab",
  serve: 4,
  ingredients: ["chiken", "lemon","onion"],
};

console.log(recipe4.title);
console.log(recipe4.serve)
console.log(`ingredient:
${recipe3.ingredients[0]}
${recipe3.ingredients[1]}
${recipe3.ingredients[2]}`);

const recipe5 = {
  title: "Chiken Kebab",
  serve: 5,
  ingredients: ["chiken", "lemon","onion"],
};

console.log(recipe5.title);
console.log(recipe5.serve)
console.log(`ingredient:
${recipe3.ingredients[0]}
${recipe3.ingredients[1]}
${recipe3.ingredients[2]}`);