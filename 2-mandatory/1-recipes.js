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

let honeyCake =
{
  tittle: "Honey cake",
  servings: 8,
  ingredients:["honey", "sugar", "eggs", "flour", "sour cream"]
}
console.log(honeyCake.tittle);
console.log(`Serves: ${honeyCake.servings}`);
console.log(`Ingredients:`);

for (let i = 0; i<honeyCake.ingredients; i++){
  console.log(honeyCake.ingredients[i])
}

let lasagne =
{
  tittle: "Lasagne",
  servings: 6,
  ingredients:["mince beef", "lasagne sheets", "tomatoes", "onion", "sauce"]
}
console.log(lasagne.tittle);
console.log(`Serves: ${lasagne.servings}`);
console.log(`Ingredients:`);

for (let i = 0; i<lasagne.ingredients; i++){
  console.log(lasagne.ingredients[i])
}

let fishSoup =
{
  tittle: "Fish soup",
  servings: 8,
  ingredients:["fish", "carrots", "potatoes", "single cream", "salt"]
}
console.log(fishSoup.tittle);
console.log(`Serves: ${fishSoup.servings}`);
console.log(`Ingredients:`);

for (let i = 0; i<fishSoup.ingredients; i++){
  console.log(fishSoup.ingredients[i])
}

let vegSalad =
{
  tittle: "Vegetable Salad",
  servings: 5,
  ingredients:["cucumber", "cherry tomatoes", "avocado", "spinach", "olive oil"]
}
console.log(vegSalad.tittle);
console.log(`Serves: ${vegSalad.servings}`);
console.log(`Ingredients:`);

for (let i = 0; i<vegSalad.ingredients; i++){
  console.log(vegSalad.ingredients[i])
}

let seafoodPasta =
{
  tittle: "Seafood pasta",
  servings: 4,
  ingredients:["prawns", "mussels", "scallops", "pasta", "butter", "black pepper"]
}
console.log(seafoodPasta.tittle);
console.log(`Serves: ${seafoodPasta.servings}`);
console.log(`Ingredients:`);

for (let i = 0; i<seafoodPasta.ingredients; i++){
  console.log(seafoodPasta.ingredients[i])
}