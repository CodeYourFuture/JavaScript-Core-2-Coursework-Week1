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
let SaltaRecipe = {
  title: "Salta",
  Service: 2,
  ingredients: ["vegetables", "broth", "spices"],
};
const FahsaRecipe = {
  title: "Fahsa",
  Service: 3,
  ingredients: ["meat", "broth", "spices"],
};
const CoffeeRecipe = {
  title: "Coffee",
  Service: 6,
  ingredients: ["hot water", "coffee powder", "Sugar"],
};
const TeaRecipe = {
  title: "Tea",
  Service: 5,
  ingredients: ["sugar", "hot water", "tea sachets"],
};
const AseedRecipe = {
  title: "Aseed",
  Service: 3,
  ingredients: ["flouer", "hot water", "salt", "Tomato sauce"],
};

const Menus = [
  SaltaRecipe,
  FahsaRecipe,
  CoffeeRecipe,
  TeaRecipe,
  AseedRecipe,
];
Menus.map((menu) => {
  console.log(menu.title);
  console.log("Service: ", menu.Service);
  console.log("ingredients: ");
  for (const ingredient of menu.ingredients) {
    console.log(ingredient);
  }
});