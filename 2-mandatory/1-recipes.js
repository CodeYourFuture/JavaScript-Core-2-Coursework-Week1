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
let favoriteRecipe1 = {
  title: "Pasta",
  servings: 1,
  ingredients: ["pasta", "butter", "yogurt", "tomato paste"],
};
let favoriteRecipe2 = {
  title: "Pasta",
  servings: 2,
  ingredients: ["pasta", "butter", "yogurt", "tomato paste"],
};
let favoriteRecipe3 = {
  title: "Pasta",
  servings: 3,
  ingredients: ["pasta", "butter", "yogurt", "tomato paste"],
};
let favoriteRecipe4 = {
  title: "Pasta",
  servings: 4,
  ingredients: ["pasta", "butter", "yogurt", "tomato paste"],
};
let favoriteRecipe5 = {
  title: "Pasta",
  servings: 5,
  ingredients: ["pasta", "butter", "yogurt", "tomato paste"],
};
console.log(
  `${favoriteRecipe1.title}\nServes: ${
    favoriteRecipe1.servings
  }\nIngredients: \n${favoriteRecipe1.ingredients.join("\t\n")}`
);

console.log(
  `${favoriteRecipe2.title}\nServes: ${
    favoriteRecipe2.servings
  }\nIngredients: \n${favoriteRecipe2.ingredients.join("\t\n")}`
);
console.log(
  `${favoriteRecipe3.title}\nServes: ${
    favoriteRecipe3.servings
  }\nIngredients: \n${favoriteRecipe3.ingredients.join("\t\n")}`
);
console.log(
  `${favoriteRecipe4.title}\nServes: ${
    favoriteRecipe4.servings
  }\nIngredients: \n${favoriteRecipe4.ingredients.join("\t\n")}`
);
console.log(
  `${favoriteRecipe5.title}\nServes: ${
    favoriteRecipe5.servings
  }\nIngredients: \n${favoriteRecipe5.ingredients.join("\t\n")}`
);
