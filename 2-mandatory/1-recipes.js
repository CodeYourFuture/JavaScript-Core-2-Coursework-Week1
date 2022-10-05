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

let recipes = {
  recipe1: {
    title: "Pasta",
    servings: 6,
    ingredients: ["Pasta", "ketchub", "salt"],
  },
  recipe2: {
    title: "Pizza",
    servings: 4,
    ingredients: ["mince", "tomato", "mushroom", "chese", "onion"],
  },
  recipe3: {
    title: "manti",
    serving: 4,
    ingredients: [" dough", "minced meat", "tomato sauce", "yogurt"],
  },
  recipe4: {
    title: "icli kofte",
    serving: 8,
    ingredients: ["fine wheat", "minced-meat", "vegetable oil", "spices"],
  },
  recipe5: {
    title: "rice",
    servings: 5,
    ingredients: ["rice", "butter", "salt", "hot water"],
  },
};
console.log("-------------Recipe 1 --------------------");
console.log(recipes.recipe1.title);
console.log("Servings: " + recipes.recipe1.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe1.ingredients.length;i++){

  console.log(recipes.recipe1.ingredients[i]);
}
console.log("-------------Recipe 2 --------------------");
console.log(recipes.recipe2.title);
console.log("Servings: " + recipes.recipe2.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe2.ingredients.length; i++) {
  console.log(recipes.recipe2.ingredients[i]);
}
console.log("-------------Recipe 3 --------------------");
console.log(recipes.recipe3.title);
console.log("Servings: " + recipes.recipe3.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe3.ingredients.length; i++) {
  console.log(recipes.recipe3.ingredients[i]);
}
console.log("-------------Recipe 4 --------------------");
console.log(recipes.recipe4.title);
console.log("Servings: " + recipes.recipe4.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe4.ingredients.length; i++) {
  console.log(recipes.recipe4.ingredients[i]);
}
console.log("-------------Recipe 5 --------------------");
console.log(recipes.recipe5.title);
console.log("Servings: " + recipes.recipe5.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe5.ingredients.length; i++) {
  console.log(recipes.recipe5.ingredients[i]);
}