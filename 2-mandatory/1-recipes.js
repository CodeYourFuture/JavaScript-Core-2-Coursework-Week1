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
let panCake1 = {
  title : "panCake",
  servings:5,
  ingredients:[
  "flour",
  "milk",
  "suger",
  "egg",
  "vanila",]


};
console.log(panCake1.title);
console.log("serving:" + panCake1. servings);
panCake1.ingredients.forEach((ingredient) => {
  console.log(ingredient);
})

let pastaBolognese = {
  title:"pastaBolognese",
  servings:4,
  ingredients:[
  "Meat",
  "garlic",
  "oliveOil",
  "onion",]
  
}
console.log(pastaBolognese.title);
console.log("serving:" + pastaBolognese.servings);
pastaBolognese.ingredients.forEach((ingredient) => {
  console.log(ingredient);
})

let polo = {
  title:"polo",
  servings:2,
  ingredients:[
    "rice",
    "water",
    "oil",
    "salt",
  ]
}
console.log(polo.title);
console.log("serves:" + polo.servings);
polo.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});



let cake = {
  title:"cake",
  servings:4,
  ingredients:[
    "eggs",
    "cream",
    "oil",
    "icing sugar",
    "flour"
  ]
}
console.log(cake.title);
console.log("serves:" + cake.servings);
cake.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let pizza = {
  title:"pizza",
  serving:2,
  ingredients:[
    "flour",
    "water",
    "oil",
    "salt",
    "yest",
  ]
}
console.log(pizza.title);
console.log("serves:" + pizza.servings);
pizza.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});
