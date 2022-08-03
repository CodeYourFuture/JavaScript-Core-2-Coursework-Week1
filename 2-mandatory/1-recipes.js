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

let recipes1 = {
  title: 'Malva Pudding',
  serving: 4,
  ingredients: ['flour', 'cream', 'sugar', 'apricot jam']
}
console.log(recipes1.title);
console.log(`Serves: ${recipes1.serving}`);
for (let item of recipes1.ingredients) {
  console.log(item);
}

let recipes2 = {
  title: 'Meatballs',
  serving: 6,
  ingredients: ['bread crumbs', 'ground meat', 'oil', 'oregano']
}
console.log(recipes2.title);
console.log(`Serves: ${recipes2.serving}`);
for (let item of recipes2.ingredients) {
  console.log(item);
}

let recipes3 = {
  title: 'Cheesecake',
  serving: 5,
  ingredients: ['cream cheese', 'cream', 'sugar', 'butter']
}
console.log(recipes3.title);
console.log(`Serves: ${recipes3.serving}`);
for (let item of recipes3.ingredients) {
  console.log(item);
}

let recipes4 = {
  title: 'Creme Brulle',
  serving: 1,
  ingredients: ['milk', 'cream', 'sugar', 'eggs', 'vanilla'],
}
console.log(recipes4.title);
console.log(`Serves: ${recipes4.serving}`);
for (let item of recipes4.ingredients) {
  console.log(item);
}
let recipes5 = {
  title: 'Potato Salad',
  serving: 8,
  ingredients: ['potatoes', 'sour-cream', 'mayonnaise', 'herbs']
}
console.log(recipes5.title);
console.log(`Serves: ${recipes5.serving}`);
for (let item of recipes5.ingredients) {
  console.log(item);
}