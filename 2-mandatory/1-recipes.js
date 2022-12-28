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
let coconutRice = {
  title: "coconut Rice",
  serves: 4,
  prepTime: "30 minutes",
  cookTime: " one hour",
  ingredients: [
    "rice x3cups",
    "coconut Milk",
    "salt",
    "veg Stock",
    "water",
    "olive Oil",
  ],
};

let potatoSalad = {
  title: "potatoSalad",
  ingredients: [
    "6 large boiled potatoes",
    "cheese",
    "spring Onions",
    "boiled Eggs",
    "rock salt",
    "organic mayonnaise",
    'cheeseTypes ["edam", "chedder", "mascarpone", "manchego", "mozzarella", "parmesan"]',
    "Mint",
  ],
  prepTime: "20 minutes",
  cookTime: "10 minutes",
  serves: 6,
  isFattening: false,
  method:
    "cut potatoes into cubes, chop up the onions and boiled eggs, grate cheese of choice. Mix all together, add mayonnaise and salt. Tossed together properly. Serve with a sprig of mint. Enjoy.",
};
console.log(coconutRice);
console.log(potatoSalad);
