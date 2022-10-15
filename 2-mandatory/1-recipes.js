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
molerecipe ={
  title : "Mole",
  servings : 2,
  ingredients : ["cinnamon", "cumin", "cocoa"]
}
cheprecipe = {
title: "Chep",
servings: 4,
ingredients: ["Fish", "Oil", "Onion", "Magui", "Galic", "Rice"]
}
gingerrecipe = {
  title: "Gingerbeer",
  servings: 3, 
  ingredients: ["Ginger", "Sugar", "Wanter", "Arom"]

}
console.log(molerecipe.title)
console.log(`Serves:${molerecipe.servings}`)
console.log("Ingredients:")
for (item of molerecipe.ingredients){
  console.log(item);
}
console.log("--------------------")
console.log(gingerrecipe.title)
console.log(`Serves:${gingerrecipe.servings}`)
console.log("Ingredients:")
for (item of gingerrecipe.ingredients){
  console.log(item);
}
console.log("--------------------")
console.log(cheprecipe.title)
console.log(`Serves:${cheprecipe.servings}`)
console.log("Ingredients:")
for (item of cheprecipe.ingredients){
  console.log(item);
}
