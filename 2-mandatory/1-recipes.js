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
const fullOfMyFavouriteRecipe = [

  myFavouriteRecipe = {
    title: "MoleOne",
    servings: 1,
    ingredients: ["cinnamonOne", "cuminOne", "cocoaOne"]
  },

  myFavouriteRecipe = {
    title: "MoleTwo",
    servings: 2,
    ingredients: ["cinnamonTwo", "cuminTwo", "cocoaTwo"]
  },

  myFavouriteRecipe = {
    title: "MoleThree",
    servings: 3,
    ingredients: ["cinnamonThree", "cuminThree", "cocoaThree"]
  },

  myFavouriteRecipe = {
    title: "MoleFour",
    servings: 4,
    ingredients: ["cinnamonFour", "cuminFour", "cocoaFour"]
  },

  myFavouriteRecipe = {
    title: "MoleFive",
    servings: 5,
    ingredients: ["cinnamonFive", "cuminFive", "cocoaFive"]
  }];

fullOfMyFavouriteRecipe.forEach(eachRecipe => {
  console.log(`\n${eachRecipe.title} \nServes: ${eachRecipe.servings} \nIngredients:`);
  eachRecipe.ingredients.forEach(eachIngredients => console.log(eachIngredients));
});
