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
  // write code here
    let toBuy = {
      name: recipe.name,
      items: []
    };

    let allInventory = pantry.fridgeContents
    console.log(allInventory);
    // allInventory.push(pantry.cupboardContents)
    for (let i=0; i < pantry.cupboardContents.length; i++){
      allInventory.push(pantry.cupboardContents[i])
    }
    console.log(allInventory); // test to check
    console.log(allInventory.includes("oregano")); // test to check

    for (let ab=0; ab < recipe.ingredients.length; ab++) {
      console.log(recipe.ingredients[ab]);
      console.log(allInventory.includes(recipe.ingredients[ab]));
      if (allInventory.includes(recipe.ingredients[ab]) === false) {
        toBuy.items.push(recipe.ingredients[ab])
      } 
    }


    

console.log(toBuy) // Just testing that the name of the recipe gets to the final output
return(toBuy)
}

createShoppingList({name: "pancakes",
    ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"]})

// createShoppingList({
//     name: "pancakes",
//     ingredients: ["flour", "eggs", "vegetable oil"],
//   })  // Just for testing

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