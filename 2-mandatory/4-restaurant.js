/*
  You are at a restaurant that has two items on the menu, burger and falafel.
  The menu object includes these two items and their price.

  You have an object cashRegister which handles charging for ordered items but it is missing some methods to do this.

  Add a method to the cashRegister object
    - the method name should be orderBurger
    - the method should take one argument called balance, which is a number
    - the method should check if there is enough money in the balance to order a burger (i.e. will the balance be greater than or equal to 0 if the burger is ordered)
    - if there is enough money in the balance to order the burger, then the price of the burger should be subtracted from the balance
    - the method should return the new balance

  Add another method to the cashRegister object which is called orderFalafel and handles ordering a falafel, in the same way as ordering a burger.
*/

const pantry = {
  fridgeContents: ["butter", "milk"],
  cupboardContents: ["salt", "tinned tomatoes", "oregano"],
};

const createShoppingList = (recipe) => ({
  name: recipe.name,
  items: recipe.ingredients.filter((e) => !pantry.fridgeContents.includes(e) && !pantry.cupboardContents.includes(e)),
});

/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 3-shopping-list.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("createShoppingList works for pancakes recipe", () => {
  const recipe1 = {
    name: "pancakes",
    ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"],
  };

  expect(createShoppingList(recipe1)).toEqual({
    name: "pancakes",
    items: ["flour", "eggs", "vegetable oil"],
  });
});

test("createShoppingList works for margherita pizza recipe", () => {
  const recipe2 = {
    name: "margherita pizza",
    ingredients: ["flour", "salt", "yeast", "tinned tomatoes", "oregano", "mozarella"],
  };

  expect(createShoppingList(recipe2)).toEqual({
    name: "margherita pizza",
    items: ["flour", "yeast", "mozarella"],
  });
});