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
    name: "Latte",
    serving: 1,
    ingredients: ["milk", "coffee", "sugar"],
  },
  {
    name: "Moroccan Tea",
    serving: 4,
    ingredients: ["tea", "mint", "hot water", "sugar"],
  },
  {
    name: "Sandwich",
    serving: 2,
    ingredients: ["bread", "tuna", "mayo", "salad", "tomato"],
  },
  {
    name: "Mole",
    serving: 2,
    ingredients: ["cinnamon", "cumin", "cacao"],
  },
  {
    name: "Apple juice",
    serving: 1,
    ingredients: ["apple", "water", "lemon", "honey"],
  },
];

recipes.map((recipe) => {
  console.log(`${recipe.name}
Serves: ${recipe.serving}
Ingredients:`);
  for (const ingredient of recipe.ingredients) {
    console.log(ingredient);
  }
  console.log("*****")
});
