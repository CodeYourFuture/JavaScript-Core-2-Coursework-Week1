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
let myFavRecipes=[
  {title:"Mole", serves:2, ingredients:["cinnamon", "cumin","cocoa"]},
  {title:"Rice", serves:1, ingredients:["rice", "water"]},
  {title:"Chicken", serves:3, ingredients:["chicken", "onion", "oil"]},
  {title:"Boiled Egg", serves:2, ingredients:["egg", "water"]},
  {title:"Cake", serves:1, ingredients:["flour", "egg", "sugar"]}
  
]
console.log("MY FAVORITE RECIPES")
myFavRecipes.forEach(recipe=>{
  console.log(recipe.title);
  console.log(`Serves: ${recipe.serves}`);
  console.log(`Ingredients :`)
  recipe.ingredients.forEach(item =>{
    console.log(item)
  })
  console.log("-------")

})