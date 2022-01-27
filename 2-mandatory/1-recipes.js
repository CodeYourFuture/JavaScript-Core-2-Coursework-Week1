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
let TeaRecipe = {
  title: "Tea",
  Service: 3,
  ingredients: ["hot water", "tea", "sugar"],
};
const CookieRecipe = {
  title: "Cookie",
  Service: 3,
  ingredients: ["sugar", "butter", "eggs", "sugar"],
  
};
const CakeRecipe = {
  title: "Cake",
  Service: 3,
  ingredients: ["eggs", "oil", "milk", "sugar","flour"],
  
};
const RiceRecipe = {
  title: "Rice",
  Service: 2,
  ingredients: ["rice", "salt", "hotwater", "butter"],
  
};
const SpagettieRecipe = {
  title: "Spagettie",
  Service: 2,
  ingredients: ["spagettie", "tomatopaste", "water", "salt"],
  
};

const Menus = [
  TeaRecipe,
  CookieRecipe,
  CakeRecipe,
  RiceRecipe,
  SpagettieRecipe,
];
Menus.map((menu) => {
  console.log(menu.title);
  console.log("Service: ", menu.Service);
  console.log("ingredients: ");
  for (const ingredient of menu.ingredients) {
    console.log(ingredient);
  }
});

