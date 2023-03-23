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

//function to check if item is included in cupboardContents array from the pantry object. return boolean value of true if item is not found in array
function notInCupboard(ingredient) {
  return pantry.cupboardContents.includes(ingredient) === false;
}

//function to check if item is included in fridgeContents array from the pantry object. return boolean value of true if item is not found in array
function notInFridge(ingredient) {
  return pantry.fridgeContents.includes(ingredient) === false;
}

function createShoppingList(recipe) {
  //create a new array with name itemsNeeded. Use filter() method to include only items not in the fridgeContents or cupboardContents arrays
  let itemsNeeded = recipe.ingredients
    .filter(notInCupboard)
    .filter(notInFridge);
  //return name of recipe using dot notation and return array itemsNeeded array
  return {
    name: recipe.name,
    items: itemsNeeded,
  };
}

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
    ingredients: [
      "flour",
      "salt",
      "yeast",
      "tinned tomatoes",
      "oregano",
      "mozarella",
    ],
  };

  expect(createShoppingList(recipe2)).toEqual({
    name: "margherita pizza",
    items: ["flour", "yeast", "mozarella"],
  });
});
