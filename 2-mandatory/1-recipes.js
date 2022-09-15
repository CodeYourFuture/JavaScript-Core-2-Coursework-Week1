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
const recipes = {
  first: {
    title: "Spaghetti",
    serves: 6,
    ingredients: ["pasta", "mince", "tomato"],
  },
  second: {
    title: "Hummus",
    serves: 2,
    ingredients: ["Tahini", "chickpea"],
  },
  third: {
    title: "fish & chips",
    serves: 4,
    ingredients: ["fish", "potato", "bread crumbs"],
  },
  forth: {
    title: "porridge",
    serves: 1,
    ingredients: ["oat", "milk"],
  },
  fifth: {
    title: "guacamole",
    serves: 3,
    ingredients: ["avocado", "tomato", "onion", "parsley"],
  },
};

console.log(recipes.first.title);
console.log(`serves:${recipes.first.serves}`);
console.log(`ingredients:`);
console.log(recipes.first.ingredients[0]);
console.log(recipes.first.ingredients[1]);
console.log(recipes.first.ingredients[2]);

console.log(recipes.second.title);
console.log(`serves:${recipes.second.serves}`);
console.log(`ingredients:`);
console.log(recipes.second.ingredients[0]);
console.log(recipes.second.ingredients[1]);

console.log(recipes.third.title);
console.log(`serves:${recipes.third.serves}`);
console.log(`ingredients:`);
console.log(recipes.third.ingredients[0]);
console.log(recipes.third.ingredients[1]);
console.log(recipes.third.ingredients[2]);

console.log(recipes.forth.title);
console.log(`serves:${recipes.forth.serves}`);
console.log(`ingredients:`);
console.log(recipes.forth.ingredients[0]);
console.log(recipes.forth.ingredients[1]);

console.log(recipes.fifth.title);
console.log(`serves:${recipes.fifth.serves}`);
console.log(`ingredients:`);
console.log(recipes.fifth.ingredients[0]);
console.log(recipes.fifth.ingredients[1]);
console.log(recipes.fifth.ingredients[2]);
console.log(recipes.fifth.ingredients[3]);
