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
let favoriteRecipe = {

 recipe1: {
  title: "soft cake",
  serves: 8,
  ingredients:["flour", "egg", "milk", "oil", "sugar", "baking powder"]
},

recipe2 : {
   title: "tea",
   serves: 4,
   ingredients:["water", "sugar", "cloves"]
},

recipe3 : {
  title: "coffee",
  serves: 2,
  ingredients: ["coffee powder", "water", "ginger powder"]
},

recipe4: {
  title: "popcorn",
  serves: 4,
  ingredients: ["popcorn", "oil", "sugar"]

},

recipe5: {
  title: "beans",
  serves: 2,
  ingredients: ["beans", "black paper", "olive oil", "salt"]
}


}

console.log(favoriteRecipe.recipe1.title);
console.log(`serves: ${favoriteRecipe.recipe1.serves}`);
console.log("ingredients:");
for(let i=0; i < favoriteRecipe.recipe1.ingredients.length; i++){
  console.log(favoriteRecipe.recipe1.ingredients[i]);
};
console.log("\n");



console.log(favoriteRecipe.recipe2.title);
console.log(`serves: ${favoriteRecipe.recipe2.serves}`);
console.log("ingredients:");
for(let i=0; i < favoriteRecipe.recipe2.ingredients.length; i++){
  console.log(favoriteRecipe.recipe2.ingredients[i]);
};

console.log("\n");


console.log(favoriteRecipe.recipe3.title);
console.log(`serves: ${favoriteRecipe.recipe3.serves}`);
console.log("ingredients:");
for(let i=0; i < favoriteRecipe.recipe3.ingredients.length; i++){
  console.log(favoriteRecipe.recipe3.ingredients[i]);
};
console.log("\n");

console.log(favoriteRecipe.recipe4.title);
console.log(`serves: ${favoriteRecipe.recipe4.serves}`);
console.log("ingredients:");
for(let i=0; i < favoriteRecipe.recipe4.ingredients.length; i++){
  console.log(favoriteRecipe.recipe4.ingredients[i]);
};
console.log("\n");


console.log(favoriteRecipe.recipe5.title);
console.log(`serves: ${favoriteRecipe.recipe5.serves}`);
console.log("ingredients:");
for(let i=0; i < favoriteRecipe.recipe5.ingredients.length; i++){
  console.log(favoriteRecipe.recipe5.ingredients[i]);
}



