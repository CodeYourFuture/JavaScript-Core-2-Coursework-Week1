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

// write code her
const myRecipes = [
  recipeOne = {
    title: "avacado salad",
    servings: 3,
    ingredients: ["avacado", "cucumber", "mayonnesse", "boiled eggs"]
  
  },
  recipeTwo = {
    title: "chicken momo",
    servings: 4,
    ingredients: ["plain flour", "mince", "onion", "msg", "salt"]
  
  },
  recipeThree = {
    title: "fry rice",
    servings: 1,
    ingredients: ["rice", "vegetable oil", "green vegetables"]
  
  },
  recipeFour = {
    title: "Fish Curry",
    servings: 3,
    ingredients: ["fish", "tamaring", "mustard seed", "cumin", "corriander"]
  
  },
  recipeFive = {
    title: "biryani",
    servings: 5,
    ingredients: ["rice", "chicken", "cinnamon", "ginger-garlic"]
  
  }
]
for (let recipe of myRecipes) {
  let title = recipe.title;
  let serving = recipe.servings;
  let ingredients = function() {for (let ingredient of recipe.ingredients) {console.log(ingredient)}};
  console.log(title)
  console.log("Serves:", serving)
  console.log("Ingredients:", ingredients())
 
  
}
