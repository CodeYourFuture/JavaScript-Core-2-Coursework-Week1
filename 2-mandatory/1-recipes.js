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
let recipes = [
  {
    title: "Mole",
    serves: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  {
    title: "Spaghetti Bolognese",
    serves: 3,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  {
    title: "Pierogi",
    serves: 4,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  {
    title: "Apple Pie",
    serves: 10,
    ingredients: ["flour", "egg", "sugar", "apple", "butter"],
  },
  {
    title: "Spinach Pasta",
    serves: 2,
    ingredients: ["pasta", "cream", "spinach", "garlic"],
  },
];

function getRecipe(recipe) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.serves}`);
  console.log("Ingredients");
  for (const item of recipe.ingredients) {
    console.log(item);
  }
}

for (const element of recipes) {
  getRecipe(element);
  console.log();
}
