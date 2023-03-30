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

let favoriteRecipe = {
  RecipeOne: {
    title: "Rice",
    Serves: 2,
    Ingredients: ["water", "chicken", "oil", "salt", "tomato", "onion"],
  },

  RecipeTow: {
    title: "PIZZAS",
    Serves: 4,
    Ingredients: ["flours", "salt", "oil", "Milk"],
  },
  RecipeThree: {
    title: "pie",
    Serves: 6,
    Ingredients: ["flours", "oil", "onions", "leaves"],
  },
  RecipeFour: {
    title: "tomato soup",
    Serves: 8,
    Ingredients: ["onion", "salt", "garlic", "chilli"],
  },
  RecipeFive: {
    title: "Pasta",
    Serves: 10,
    Ingredients: ["water", "crème", "oil", "black pepper"],
  },
};
// 1

console.log(favoriteRecipe.RecipeOne.title);
console.log(`Serves:${favoriteRecipe.RecipeOne.Serves}`);
console.log("Ingredients:");
favoriteRecipe.RecipeOne.Ingredients.forEach((a) => console.log(a));

// 2
console.log("//////////////////////////////////");
console.log(favoriteRecipe.RecipeTow.title);
console.log(`Serves:${favoriteRecipe.RecipeTow.Serves}`);
console.log("Ingredients:");
favoriteRecipe.RecipeTow.Ingredients.forEach((a) => console.log(a));

// 3
console.log("//////////////////////////////////");
console.log(favoriteRecipe.RecipeThree.title);
console.log(`Serves:${favoriteRecipe.RecipeThree.Serves}`);
console.log("Ingredients:");
favoriteRecipe.RecipeThree.Ingredients.forEach((a) => console.log(a));

// 4
console.log("//////////////////////////////////");
console.log(favoriteRecipe.RecipeFour.title);
console.log(`Serves:${favoriteRecipe.RecipeFour.Serves}`);
console.log("Ingredients:");
favoriteRecipe.RecipeFour.Ingredients.forEach((a) => console.log(a));

// 5
console.log("//////////////////////////////////");
console.log(favoriteRecipe.RecipeFive.title);
console.log(`Serves:${favoriteRecipe.RecipeFive.Serves}`);

console.log("Ingredients:");
favoriteRecipe.RecipeFive.Ingredients.forEach((a) => console.log(a));
