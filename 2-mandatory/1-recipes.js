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
let recipeOne = {
  Title: "My Pasta Recipe",
  Serves: 5,
  Ingredients: ["Tomatoes", "Oil", "Salt", "Spaghetti"],
};


let recipeTwo = {
  Title: "My Chocolate Cake Recipe",
  Serves: 10,
  Ingredients: ["Flour", "Eggs", "Sugar", "Milk" , "Dark Chocolate"],
};


let recipeThree = {
  Title: "My Summer Punch Recipe",
  Serves: 6,
  Ingredients: ["Rum", "Lime", "Orange Juice", "Ice", "Liquor"],
};


let recipeFour = {
  Title: "My Grilled Chicken Recipe",
  Serves: 10,
  Ingredients: ["Chicken Breast", "Carrots", "Onions", "Black Pepper", "Salt"],
};


let recipeFive = {
  Title: "My Salad Recipe",
  Serves: 3,
  Ingredients: ["Lettuce", "Eggs", "Cream Salad", "Sweetcorn", "Mustard"],
};

const recipes = [recipeOne, recipeTwo, recipeThree, recipeFour, recipeFive];

function myRecipeBook(recipes) {
  recipes.forEach((recipe) => {
    console.log(recipe.Title);
    console.log("Serves:" + " " + "\n" + recipe.Serves);
    console.log("Ingredients:" + " " + "\n" + recipe.Ingredients.join("\n"));
  });
}

myRecipeBook(recipes);