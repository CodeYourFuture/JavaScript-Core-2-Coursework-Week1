/*
  You have a pantry object that tells you the contents of your fridge and your cupboards.

  Write a function createShoppingList that takes a recipe as a parameter.
  The recipe parameter has two properties:
    - "name", which is a string
    - "ingredients", which is an array of strings

  The createShoppingList function should find which ingredients from the recipe are missing from the pantry.

  The createShoppingList function should return an object with two properties:
    - "name" of the recipe, which is a string,
    - "items", which is an array of the missing ingredients that need to be on the shopping list
*/

// 2 variables - 1 string for name and 1 array for ingredients
// compare array of ingredients to arrays in pantry object to find which are missing
// .push the missing items into new array
// return name of recipe and array of missing ingredients for the shopping list

let pantry = {
  fridgeContents: ["butter", "milk"],
  cupboardContents: ["salt", "tinned tomatoes", "oregano"],
};

// new array with missing items (missingItems)
function createShoppingList(recipe) {
  let recipeName;
  let recipeIngredients;
  let missingItems = [];
  let recipeObject = recipeName + missingItems;

  //.filter?? to compare ingredients to pantry

  return recipeObject;
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
