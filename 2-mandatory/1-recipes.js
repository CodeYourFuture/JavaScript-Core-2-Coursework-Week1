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
let myFavoriteRecipes={
  recipe1:{
    title:"Gulab Jamun",
    serves:5,
    ingredients:["khoya or mawa","sugar","cardamom","milk","flour"]
  },
  recipe2:{
    title:"dosa",
    serves:2,
    ingredients:["cup rice","urud dhal","methi seeds"]
  },
  recipe3:{
    title:"paneer curry",
    serves:2,
    ingredients:["paneer","onion","tomato","chilly powder","spices"]
  },
  recipe4:{
    title:"batata vada",
    serves:2,
    ingredients:["potato","oil","green chilly","gram flour","turmeric","mustered"]
  },
  recipe5:{
    title:"Indian tea",
    serves:2,
    ingredients:["milk","tea powder","sugar","ginger"]
  }
};
console.log(myFavoriteRecipes.recipe1);
console.log(myFavoriteRecipes.recipe2);
console.log(myFavoriteRecipes.recipe3);
console.log(myFavoriteRecipes.recipe4);
console.log(myFavoriteRecipes.recipe5);

