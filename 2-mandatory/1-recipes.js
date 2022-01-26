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
let favouriteRecipe = {
  title: "Bulletproof Coffee",
  servings: 4,
  ingredients: ["coffee", "hot water", "coconut oil"],
};

console.log(favouriteRecipe.title);
console.log(`Serves: ${favouriteRecipe.servings}`);
console.log(`Ingredients:`);
favouriteRecipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let secondRecipe = {
  title: "Pasta",
  servings: 2,
  ingredients: ["pasta", "hot water", "tinned tomatoes", "salt", "olive oil"],
};

console.log(secondRecipe.title);
console.log(`Serves: ${secondRecipe.servings}`);
console.log(`Ingredients:`);
secondRecipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let thirdRecipe = {
  title: "Thai Green Curry",
  servings: 1,
  ingredients: ["rice", "green thai curry paste", "vegetables", "spices"],
};

console.log(thirdRecipe.title);
console.log(`Serves: ${thirdRecipe.servings}`);
console.log(`Ingredients:`);
thirdRecipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let fourthRecipe = {
  title: "Green tea",
  servings: 2,
  ingredients: ["hot water", "green tea"],
};

console.log(fourthRecipe.title);
console.log(`Serves: ${fourthRecipe.servings}`);
console.log(`Ingredients:`);
fourthRecipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let fifthRecipe = {
  title: "Fruit Smoothie",
  servings: 1,
  ingredients: ["banana", "strawberries", "water", "dates", "seeds"],
};

console.log(fifthRecipe.title);
console.log(`Serves: ${fifthRecipe.servings}`);
console.log(`Ingredients:`);
fifthRecipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});
