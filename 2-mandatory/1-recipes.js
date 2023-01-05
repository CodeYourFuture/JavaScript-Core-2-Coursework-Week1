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

let recipeCard1 = {
  title: "Borsch",
  servings: 5,
  ingredients: [
    "Water - 1.5-2 liters.",
    "pork or beef on the bone - 400 g",
    "potatoes - 4 pcs. (medium)",
    "beets - 2 pcs. (small)",
    "carrot - 1 pc.",
    "onion - 3 pcs. (medium)",
    "fresh white cabbage - 300 g",
    "tomato paste - 2 tbsp. l.",
    "sunflower oil - 4-5 tbsp. l.",
    "citric acid - a little",
    "salt, bay leaf, herbs - to taste",
  ],
};
console.log(recipeCard1.title);
console.log("Servings:", recipeCard1.servings);
console.log("Ingredients:");
console.log(recipeCard1.ingredients.forEach((e) => console.log(e)));

let recipeCard2 = {
  title: "Pasta with cottage cheese",
  servings: 2,
  ingredients: ["Pasta", "Cottage cheese", "Butter", "salt"],
};
console.log(recipeCard2.title);
console.log();

let recipeCard3 = {
  title: "Shaurma",
  servings: 2,
  ingredients: ["Garlic sous", "Meat", "Salad", "tomato", "Cheese"],
};

let recipeCard4 = {
  title: "Salad",
  servings: 3,
  ingredients: ["Tomato", "Cabbage", "Cucumber", "Sweet pepper", "Brinsa"],
};

let recipeCard5 = {
  title: "Chocolate mousse",
  servings: 6,
  ingredients: ["Chocolate powder", "Milk", "Sugar", "Flour", "Butter"],
};
