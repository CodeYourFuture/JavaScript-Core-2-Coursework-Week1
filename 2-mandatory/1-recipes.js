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

let myFirstRecipe={
  title:"Zereshk Polo",
  serves: 4,
  ingredients:["Rice","Zereshk","Chicken","Zafaran"]
}

console.log(myFirstRecipe.title)
console.log(`Serves: ${myFirstRecipe.serves}`)
console.log(`Ingredients: ${myFirstRecipe.ingredients.join("\n")}`)

let mySecondRecipe={
  title:"Dolmeh",
  serves: 6,
  ingredients:["Rice","Lamb","cabbage","Dill"]
}

console.log(mySecondRecipe.title)
console.log(`Serves: ${mySecondRecipe.serves}`)
console.log(`Ingredients: ${mySecondRecipe.ingredients.join("\n")}`)


