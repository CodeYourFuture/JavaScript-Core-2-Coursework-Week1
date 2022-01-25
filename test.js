function createLookup(countryCurrencyCodes) {
  // write code here
  let currencyObj = {};
  countryCurrencyCodes.forEach((item) => {
    let theKey = item[0];
    currencyObj[theKey] = item[1];
  });
  return currencyObj;
}
const COUNTRY_CURRENCY_CODES = [
  ["GB", "GBP"],
  ["DE", "EUR"],
  ["NG", "NGN"],
  ["MX", "MXN"],
];

// console.log(createLookup(COUNTRY_CURRENCY_CODES));

let pantry = {
  fridgeContents: ["butter", "milk"],
  cupboardContents: ["salt", "tinned tomatoes", "oregano"],
};

function createShoppingList(recipe) {
  let newRecipe = {
    name: recipe.name,
    ingredients: [],
  };
  recipe.ingredients.filter((item) => {
    if (
      !pantry.fridgeContents.includes(item) &&
      !pantry.cupboardContents.includes(item)
    ) {
      newRecipe.ingredients.push(item);
    }
  });
  return newRecipe;
}

let recipe1 = {
  name: "pancakes",
  ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"],
};

console.log(createShoppingList(recipe1));
