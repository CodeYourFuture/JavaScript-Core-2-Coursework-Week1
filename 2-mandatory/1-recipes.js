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

let myFavouriteRecipes = [
  {
    Title: "Mushroom Omelette",
    Serves: 2,
    Ingredients: ["eggs", "butter", "mushrooms"],
  },
  {
    Title: "Butter Bean Stew",
    Serves: 4,
    Ingredients: ["butter beans", "cherry tomatoes", "chicken stock"],
  },
  {
    Title: "Cold Soba Noodles",
    Serves: 2,
    Ingredients: ["Soba Noodles", "Mirin", "Dashi", "Soya Sauce"],
  },
  {
    Title: "Death By Decaf",
    Serves: 2,
    Ingredients: ["Panther M*lk", "Tia Maria", "Oat Milk", "Cold Brew"],
  },
  {
    Title: "Steamed Hams",
    Serves: 2,
    Ingredients: ["Krusty Burger", "Aurora Borealis"],
  },
];

// forEach will execute this function for each array element
// note: I could also use Object.fromEntries()
function printRecipes(recipe) {
  console.log(recipe.Title);
  console.log(`Serves: ${recipe.Serves}`);
  console.log(`Ingredients:`);
  recipe["Ingredients"].forEach((ingredient) => console.log(ingredient));
  console.log(`***`);
}

myFavouriteRecipes.forEach(printRecipes);
