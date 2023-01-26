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

let recipe1 = {
  title: "Egg and Tomatoes",
  Serves: 8,
  Ingredients: [ "egg", "tomatoes",  "onions", "chilli pepper" ]
}
let recipe2 = {
  title: "cake",
  Serves: 7,
  Ingredients: [ "egg", "Flavour",  "milk", "sugar" ]
}

let recipe3 = {
  title: "Pasta",
  Serves: 4,
  Ingredients: [ "Pasta", "tomatoes",  "onions", "butter", "cream" ]
}

let recipe4 = {
  title: "Soup",
  Serves: 6,
  Ingredients: [ "carrot", "potatoes", "courgette", "watercress" ]
}



let recipe5 = {
  title: "stew",
  serv: 8,
  Ingredients: [ "chiken", "tomatoes",  "carrots", "oil" ]
}

const myFavouriteRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5]
for (let i = 0; i < myFavouriteRecipes.length; i++) {
  for (const property in myFavouriteRecipes[i]) {
    if (property === "title") {
      console.log(`${myFavouriteRecipes[i][property]}`)
    } else if (property === "Serves") {
      console.log(`${property}:${myFavouriteRecipes[i][property]}`)
    } else if (property === "Ingredients") {
      console.log(`${property}:`)
Array.from(myFavouriteRecipes[i][property]).forEach((x) => console.log(x))
console.log(`----------------`)
    }
  }
}