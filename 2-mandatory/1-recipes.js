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

let recipe1 = {
title: "eggs and tomatoes",
servings: 8,
ingredients: ["eggs", "tomatoes", "onions", "chilli pepper"]
}

let recipe2 = {
  title: "cake",
  servings: 4,
  ingredients: ["eggs", "milk", "flour", "oil"],
};

let recipe3 = {
  title: "pasta",
  servings: 2,
  ingredients: ["pasta", "tomatoes", "onions", "chilli pepper", "cream", "butter"],
};

let recipe4 = {
  title: "soup",
  servings: 5,
  ingredients: ["carrots", "potatoes", "watercress", "courgette"],
};

let recipe5 = {
  title: "stew",
  servings: 6,
  ingredients: ["chicken", "tomatoes", "carrots", "potatoes"],
};

const myFavouriteRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5];

for (let i = 0; i < myFavouriteRecipes.length; i++) {
  for (const property in myFavouriteRecipes[i]) {
    if (property === "title") {
      console.log(`${myFavouriteRecipes[i][property]}`);
    } else if (property === "servings") {
      console.log(`${property}:${myFavouriteRecipes[i][property]}`);
    } else if (property === "ingredients") {
      console.log(`${property}:`);
      Array.from(myFavouriteRecipes[i][property]).forEach((x) =>
        console.log(x)
      );
      console.log(`----------------`);
    }
  }
}