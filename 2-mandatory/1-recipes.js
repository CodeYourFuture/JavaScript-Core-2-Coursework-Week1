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
let chickenBake = {
  title: "Chicken and Bisquits Bake",
  servings: 6,
  ingredients: [
    "butter",
    "onion",
    "flour",
    "chicken broth",
    "salt",
    "pepper",
    "heavy cream",
    " chicken",
    "biscuits",
  ],
};

let tacoSoup = {
  title: "Taco Soup",
  servings: 6,
  ingredients: [
    "ground beef",
    "small onion",
    "canned kidney bean",
    "tomato sauce",
    "taco seasoning",
    "avocado",
    "tortilla chip",
    "lime widge",
  ],
};

let baconEggRamen = {
  title: "Bacon and Egg Ramen",
  servings: 1,
  ingredients: [
    "package instant ramen",
    "fried egg",
    "bacon",
    "scallions",
    "salt",
    "pepper",
  ],
};

let salmonAsparagus = {
  title: "Garlic Salmon and Asparagus",
  servings: 2,
  ingredients: [
    "salmon fillet",
    "asparagus",
    "salted butter",
    "olive oil",
    "garlic minced",
    "salt",
    "pepper",
  ],
};

let loMein = {
  title: "15 Minute Lo Mein",
  servings: 4,
  ingredients: [
    "dark soy sauce",
    "oyster sauce",
    "ramen noodles",
    "green onions",
    "carrots",
    "red peppers",
    "cabbage",
    "bok choy",
    "mushrooms",
  ],
};

let recipesBook = [
  chickenBake,
  tacoSoup,
  baconEggRamen,
  salmonAsparagus,
  loMein,
];

function showRecipe(recipe) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.servings}`);
  console.log("Ingredients:");
  recipe.ingredients.forEach((ingredient) => console.log(ingredient));
  console.log("-------------------------------");
}

recipesBook.forEach((recipe) => showRecipe(recipe));
