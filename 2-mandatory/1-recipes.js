/*
  The Recipe Card :   Never forget another recipe! 
  Create an object to hold information on your favorite recipe.  It should have properties for:

  - title (a string),   - servings (a number), and  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:   cinnamon  cumin  cocoa

  You should write and log at least 5 recipes */
// write code here
let recipe1 = { title:"cake", servings: 4, ingredients: ["flour", "eggs", "butter", "baking powder","sugar" ], };

let recipe2 = { title:"fried Rice", servings: 6, ingredients: ["rice", "chicken","vegetables","seasoning"], };

let recipe3 = { title:"Pasta ", servings: 3, ingredients: ["pasta", "carrot", "capsicum", "chicken"], };

let recipe4 = { title:"sandwich ", servings: 2, ingredients: ["eggs", "bread", "mayo", "seasoning"], };

let recipe5 = { title:"mango shake ", servings: 3, ingredients: ["mango", "milk", "sugar","mango iceCream",], };
 
function displayAllTheRecipes(recipes){
console.log(recipes.title);
console.log(`Servings: ${recipes.servings}`);
console.log(`Ingredients: ${recipes.ingredients}`)
return "";
}
let allRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5];
for(let recipe of allRecipes){
  console.log(displayAllTheRecipes(recipe));
}
