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
const myRecipes = {
  Recipe1: {
    Title: "Pho",
    Serves: 1,
    Ingredients: ["rice noodles", "broth", "beef", "herbs", "limes", "chilies"],
  },
  Recipe2: {
    Title: "Satay",
    Serves: 2,
    Ingredients: [
      "chicken",
      "peanut sauce",
      "chili sauce",
      "shallots",
      "sambal",
      "limes juice",
      "chiles",
    ],
  },
  Recipe3: {
    Title: "Bakso",
    Serves: 2,
    Ingredients: ["mince beef", "flour", "pepper", "eggs", "baking powder"],
  },
  Recipe4: {
    Title: "Nasi Goreng ",
    Serves: 1,
    Ingredients: [
      "shrimp paste",
      "chilli",
      "garlic",
      "chicken",
      "kecap manis",
      "onion",
      "cooked cold rice",
    ],
  },
  Recipe5: {
    Title: "Bubur Ayam",
    Serves: 2,
    Ingredients: [
      "rice",
      "chicken",
      "fish sauce ",
      "white pepper",
      "green onions",
    ],
  },
};
// console.log(myRecipes);

// Object.values(myRecipes.Recipe1).forEach((recipe) => console.log(recipe));

// Object.entries(myRecipes.Recipe1).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// var myRecipesCount = Object.keys(myRecipes).length;
// console.log(myRecipesCount);

// function favoriteRecipe(recipeObj) {
//   for ([key, value] of Object.entries(recipeObj)) {
//     console.log(`${key}: ${value}`);
//   }
// }
// favoriteRecipe(myRecipes.Recipe1);
// favoriteRecipe(myRecipes.Recipe2);
// favoriteRecipe(myRecipes.Recipe3);
// favoriteRecipe(myRecipes.Recipe4);
// favoriteRecipe(myRecipes.Recipe5);

// for (const recipe in myRecipes) {
//   for (const [key, value] of Object.entries(myRecipes[recipe])) {
//     console.log(`${key}: ${value}`);
//   }
// }

for (const recipe in myRecipes) {
  for (const key in myRecipes[recipe]) {
    console.log(`${key}: ${myRecipes[recipe][key]}`);
  }
}
