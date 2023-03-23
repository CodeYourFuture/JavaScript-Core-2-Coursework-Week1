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

// helper function compares pantry with recipe ingredients
function findMissingItems(item) {
  // glued the two object arrays together
  let combinedPantry = pantry["fridgeContents"].concat(
    pantry["cupboardContents"]
  );
  // returning items on the recipe ingredients array not found in pantry array
  if (!combinedPantry.includes(item)) {
    return item;
  }
}

// Main function
function createShoppingList(recipe) {
  let shoppingList = {};

  // creating a new array with only the missing items
  let missingItems = recipe["ingredients"].filter(findMissingItems);

  // adding properties and values to shoppingList object
  shoppingList["name"] = recipe["name"];
  shoppingList["items"] = missingItems;

  return shoppingList;
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
    ingredients: ["flour", "salt", "yeast", "tinned tomatoes", "oregano", "mozarella"],
  };

  expect(createShoppingList(recipe2)).toEqual({
    name: "margherita pizza",
    items: ["flour", "yeast", "mozarella"]
  });
});