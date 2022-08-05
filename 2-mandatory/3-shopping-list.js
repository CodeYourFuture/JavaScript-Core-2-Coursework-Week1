/*
  You have a pantry object that tells you the contents of your fridge and your cupboards.

  Write a function createShoppingList that takes a recipe as a parameter.
  The recipe parameter has two properties:
    - "name", which is a string
    - "ingredients", which is an array of strings

  The createShoppingList function should find which ingredients from the recipe are missing from the pantry.

  The createShoppingList function should return an object with two properties:
    - "name" of the recipe, which is a string,
    - "items", which is an arry of the missing ingredients that need to be on the shopping list
*/

let pantry = {
  fridgeContents: ["butter", "milk"],
  cupboardContents: ["salt", "tinned tomatoes", "oregano"],
};

function createShoppingList(recipe) {
  let ingredientsShort = {};
  if (ingredientsShort = recipe.ingredients.filter(fridgeContents => recipe.ingredients.includes(fridgeContents))) {
    return ingredientsShort;
  }
  if (ingredientsShort = recipe.ingredients.filter(cupboardContents => recipe.ingredients.includes(cupboardContents))) {
    return ingredientsShort;
  }
}

// function createShoppingList(recipe) {
//   // let recipe = recipe1 + recipe2
//   let shortFridge = [];
//   let shortCupboared = [];
//   let ingredientsShort = {}
//   let ingredients = ["flour", "salt", "yeast", "tinned tomatoes", "oregano", "mozarella", "milk", "eggs", "vegetable oil"];

//   if (recipe !== pantry.fridgeContents) {
//     return shortFridge =  ingredients - pantry.fridgeContents;
//   }
//   if ( recipe !== pantry.cupboardContents) {
//     return shortCupboared = ingredients - pantry.cupboardContents;
//   }
//   ingredientsShort.concat(shortFridge, shortCupboared);
// }

// function createShoppingList(recipe) {
//   let shortFridge = {};
//   let shortCupboared = {};

//   shortFridge = recipe.filter(ingredients) - recipe.ingredients.includes(fridgeContents);
//   return shortFridge;

//   shortCupboared = recipe.filter(ingredients) - recipe.ingredients.includes(cupboardContents);
//  return shortCupboared;
// };
// console.log(shortFridge + shrortCupboared);

// let ingredientsShort = {
//   name: "",
//   items: [""],
// };

// function createShoppingList(recipe1, recipe2) {
//   if (recipe1 != pantry.fridgeContents || recipe1 != pantry.cupboardContents) {
//     let ingredientsShort = recipe1;
//     return ingredientsShort;
//   }
//   if (recipe2 != pantry.fridgeContents || recipe2 != pantry.cupboardContents) {
//     let ingredientsShort = recipe2;
//     return ingredientsShort;
//   }
  // write code here


/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 3-shopping-list.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("createShoppingList works for pancakes recipe", () => {
  let recipe1 = {
    name: "pancakes",
    ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"],
  };

  expect(createShoppingList(recipe1)).toEqual({
    name: "pancakes",
    items: ["flour", "eggs", "vegetable oil"],
  });
});

test("createShoppingList works for margherita pizza recipe", () => {
  let recipe2 = {
    name: "margherita pizza",
    ingredients: ["flour", "salt", "yeast", "tinned tomatoes", "oregano", "mozarella"],
  };

  expect(createShoppingList(recipe2)).toEqual({
    name: "margherita pizza",
    items: ["flour", "yeast", "mozarella"]
  });
});