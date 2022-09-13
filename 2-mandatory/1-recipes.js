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

// let RecipeCard = {
//   Mole: {
//   Serves: 2,
//   Ingredients: ["cinnamon", "cumin", "cocoa"],
//   }
// }

// console.log(RecipeCard)

let recipe = {
  title: "Gin&Tonic",
  Serves: 4,
  Ingredients: [
    "gin",
    "tonic",
    "ice",
    "lemon"
  ]
}
console.log(recipe.title)
console.log("Serves: " + recipe.Serves)
console.log("Ingredients:")
recipe.Ingredients.forEach(ingredient=>console.log(ingredient))
console.log("")


let recipe2 = {
  title: "Pizza",
  Serves: 4,
  Ingredients: [
    "flour",
    "water",
    "yeast",
    "tomatoes",
    "pepperoni"
  ]
}
console.log(recipe2.title)
console.log("Serves: " + recipe2.Serves)
console.log("Ingredients:")
recipe2.Ingredients.forEach(ingredient=>console.log(ingredient))
console.log("")

let recipe3 = {
  title: "Goulash",
  Serves: 4,
  Ingredients: [
    "Beef",
    "tomatoes",
    "pepepers",
    "paprika",
    "potatoes",
    "lard",
    "large onion",
    "carrots",
    "salt",
    "pepper",
  ]
}
console.log(recipe3.title)
console.log("Serves: " + recipe3.Serves)
console.log("Ingredients:")
recipe3.Ingredients.forEach(ingredient=>console.log(ingredient))
console.log("")

let recipe4 = {
  title: "Pasta Bolognese",
  Serves: 2,
  Ingredients: [
    "pasta",
    "water",
    "minced meat",
    "tomatoes",
    "olive oil",
    "garlic",
    "oregano",
    "red wine"
  ]
}
console.log(recipe4.title)
console.log("Serves: " + recipe4.Serves)
console.log("Ingredients:")
recipe4.Ingredients.forEach(ingredient=>console.log(ingredient))
console.log("")

let recipe5 = {
  title: "Bacon Butty",
  Serves: 1,
  Ingredients: [
    "crusty roll",
    "bacon slices",
    "butter"     
  ]
}
console.log(recipe5.title)
console.log("Serves: " + recipe5.Serves)
console.log("Ingredients:")
recipe5.Ingredients.forEach(ingredient=>console.log(ingredient))
console.log("")