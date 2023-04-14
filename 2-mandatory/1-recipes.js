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
const favoriteRecipes = {
  recipeFirst : {
    title : "Cake",
    servings : 4,
    ingredients : ['coca','suger','egg','vanilia', 'flour']
  },
  recipeSecond :{
    title : "Ash",
    servings : 6,
    ingredients : ['nodel','salt','bean','vegtable','water']
  },
  recipeThird :{
    title : "Nimroo",
    servings : 2,
    ingredients : ['egg' ,'salt','oil']
  },
  recipeForth :{
    title : "Ghorme Sabzi",
    servings : 6,
    ingredients : ['vegtable','salt','onion','bean','meat']
  },
  recipeFifth :{
    title : "Salad",
    servings : 5,
    ingredients : ['tomato','maionez','cocamber','onion','lemon jouice']
  }
}
console.log(favoriteRecipes.recipeFirst);
console.log(favoriteRecipes.recipeSecond);
console.log(favoriteRecipes.recipeThird);
console.log(favoriteRecipes.recipeForth);
console.log(favoriteRecipes.recipeFifth);