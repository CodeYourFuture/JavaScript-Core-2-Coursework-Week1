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
let recipeCard = {
  recipe1: {
    name: "Salad",
    serves: 3,
    ingredients: ["cucumber", "tomatoes", "beans"],
  },
  recipe2: {
    name: "Pie",
    serves: 2,
    ingredients: ["cheese", "flour", "water", "butter"],
  },
  recipe3: {
    name: "Pizza",
    serves: 3,
    ingredients: ["olives", "flour", "oil", "peperoni"],
  },
  recipe4: {
    name: "Fries",
    serves: 3,
    ingredients: ["potatoes", "oil", "salt", "pepper"],
  },
  recipe5: {
    name: "Rice",
    serves: 4,
    ingredients: ["rice", "carrots", "peas"],
  },
};
console.log(recipeCard.recipe1.name);
console.log(`Serves:${recipeCard.recipe1.serves}`);
for (index in recipeCard.recipe1.ingredients) {
  console.log(recipeCard.recipe1.ingredients[index]);
}
console.log(recipeCard.recipe2.name);
console.log(`Serves:${recipeCard.recipe2.serves}`);
for (index in recipeCard.recipe2.ingredients) {
  console.log(recipeCard.recipe2.ingredients[index]);
}
console.log(recipeCard.recipe3.name);
console.log(`Serves:${recipeCard.recipe1.serves}`);
for (index in recipeCard.recipe3.ingredients) {
  console.log(recipeCard.recipe3.ingredients[index]);
}
console.log(recipeCard.recipe4.name);
console.log(`Serves:${recipeCard.recipe4.serves}`);
for (index in recipeCard.recipe4.ingredients) {
  console.log(recipeCard.recipe4.ingredients[index]);
}
console.log(recipeCard.recipe5.name);
console.log(`Serves:${recipeCard.recipe5.serves}`);
for (index in recipeCard.recipe5.ingredients) {
  console.log(recipeCard.recipe5.ingredients[index]);
}
