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
  title: "chicken curry",
  servings: 1,
  ingredients: ["coconut milk", "vegtable", "curry powder"],
};
let recipe2 = {
  title: "lasagna",
  servings: 2,
  ingredients: ["mozzarella", "olive oil", "lasagna noodles", ],
};
let recipe3 = {
  title: "spaghetti",
  servings: 3,
  ingredients: ["tomato sauce", "diced tomatoes", "parsley"],
};
let recipe4 = {
  title: "Tacos",
  servings: 4,
  ingredients: ["tomato", "cubed steak", "jalapenoes"],
};
let recipe5 = {
  title: "Chow mein",
  servings: 5,
  ingredients: ["chow mein noodles", "onions", "green cabbage"],
};
console.log(recipe1.title)
console.log(`Serves:${recipe1.servings}`)
console.log("Ingredients")
for (item of recipe1.ingredients){
  console.log(item);
}

console.log("--------------------")
console.log(recipe2.title)
console.log(`Serves:${recipe2.servings}`)
console.log("Ingredients")
for (item of recipe2.ingredients){
  console.log(item);
}


console.log("--------------------")
console.log(recipe3.title)
console.log(`Serves:${recipe3.servings}`)
console.log("Ingredients")
for (item of recipe3.ingredients){
  console.log(item);
}

console.log("--------------------")
console.log(recipe4.title)
console.log(`Serves:${recipe4.servings}`)
console.log("Ingredients")
for (item of recipe4.ingredients){
  console.log(item);
}

console.log("--------------------")
console.log(recipe5.title)
console.log(`Serves:${recipe5.servings}`)
console.log("Ingredients")
for (item of recipe5.ingredients){
  console.log(item);
}