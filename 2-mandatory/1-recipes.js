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

let recipeCard = [
  {
    title: "Banana Smoothie",
    servings: 1,
    ingredients: ["banana", "oat milk", "peanut butter", "honey"],
  },
  {
    title: "Porridge",
    servings: 1,
    ingredients: ["porridge oats", "milk", "greek yogurt", "honey"],
  },
  {
    title: "Fried egg",
    servings: 1,
    ingredients: ["egg", "butter", "salt", "pepper"],
  },
  {
    title: "Tomato soup",
    servings: 1,
    ingredients: ["tomatoes", "carrot", "onion", "olive oil"],
  },
  {
    title: "Spanish potatoes",
    servings: 1,
    ingredients: ["potatoes", "paprika", "garlic", "parsley"],
  },
];

recipeCard.forEach((recipe) => {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.servings}`);
  recipe.ingredients.forEach((ingredient) => console.log(ingredient));
  console.log("\n")
});
//added next line for better readability