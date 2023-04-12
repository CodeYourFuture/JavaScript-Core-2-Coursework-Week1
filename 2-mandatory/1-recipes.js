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
  { title: "Mole", serves: 2, ingredients: ["cinnamon", "cumin", "cocoa"] },
  { title: "Rice", serves: 5, ingredients: ["rice", "water", "oil"] },
  {
    title: "pizza",
    serves: 3,
    ingredients: ["flour", "onions", "meat", "garlic"],
  },
  {
    title: "curry",
    serves: 6,
    ingredients: ["chicken", "onions", "mushrooms"],
  },
  {
    title: "soup",
    serves: 1,
    ingredients: ["water", "flour", "peas", "mushroom"],
  },
];

for (let i=0; i<recipes.length; i++) {
  console.log(recipes[i].title);
  console.log("Serves: ", recipes[i].serves);
  console.log("Ingredients:");
  for (let j = 0; j<recipes[i].ingredients.length; j++) {
    console.log(recipes[i].ingredients[j]);
  }
  console.log(" ");
}

