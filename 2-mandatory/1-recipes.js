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

let favoriteRecipe = [
  {
    tittle: "Pancakes",
    serves: 2,
    ingredients: [
      "milk",
      "butter",
      "egg",
      "sugar",
      "flour",
      "baking powder",
      "salt",
    ],
  },
  {
    tittle: "Pizza",
    serves: 4,
    ingredients: ["flour", "yeast", "mozarella", "totmato pure", "oil"],
  },
  {
    title: "Mole",
    serves: 4,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  {
    title: "Pretizel",
    serves: 4,
    ingredients: ["yeast", "sugar", "salt", "water", "butter"],
  },
  {
    title: "Ice-cream",
    serves: 2,
    ingredients: [
      "milk",
      "cream",
      "melted chocolate",
      "sugar",
      "cocoa powder",
      "additional mix-ins",
    ],
  },
];

console.log(favoriteRecipe);
