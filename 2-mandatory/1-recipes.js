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

let favoriteRecipes={
  recipe1:{
    title:"briyani",
    serves:3,
    ingredients:["rice","onion","tomato","mint","masala"]
  },
  recipe2:{
    title:"idly",
    serves:1,
    ingredients:["rice","urud dhal"]
  },
  recipe3:{
    title:"fishCurry",
    serves:3,
    ingredients:["fish","onion","tomato","chilly powder"]
  },
  recipe4:{
    title:"vada",
    serves:3,
    ingredients:["urud dhal","onion","chilly"]
  },
  recipe5:{
    title:"kova",
    serves:2,
    ingredients:["milk","sugar"]
  }
};
console.log(favoriteRecipes.recipe1);
console.log(favoriteRecipes.recipe2);
console.log(favoriteRecipes.recipe3);
console.log(favoriteRecipes.recipe4);
console.log(favoriteRecipes.recipe5);