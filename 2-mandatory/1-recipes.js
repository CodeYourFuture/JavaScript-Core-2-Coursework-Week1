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
let myFavoriteRecipe = {
  Title: 'Jell of rice',
  Serves: 1,
  Ingredients: ['rice', 'tomatoes', 'chicken', 'olive oil', 'herbs']
}
console.log(myFavoriteRecipe.Title);
console.log(`Serves: ${myFavoriteRecipe.Serves}`);
console.log("Ingredients:");
myFavoriteRecipe.Ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let FavoriteRecipe = {
  Title: "Plantain and egg",
  Serves: 2,
  Ingredients: ["plantain", "egg", "olive oil"],
};
console.log(FavoriteRecipe.Title);
console.log(`Serves: ${FavoriteRecipe.Serves}`);
console.log("Ingredients:");
FavoriteRecipe.Ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let anotherFavoriteRecipe = {
  Title: "Pepper soup",
  Serves: 3,
  Ingredients: ["pepper", "beef", "seasoning"],
};
console.log(anotherFavoriteRecipe.Title);
console.log(`Serves: ${anotherFavoriteRecipe.Serves}`);
console.log("Ingredients:");
anotherFavoriteRecipe.Ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let moreFavoriteRecipe = {
  Title: "Salad",
  Serves: 4,
  Ingredients: ["cabbage", "egg", "carrot", "sweet corn", "cucumber", "mayonnaise"],
};
console.log(moreFavoriteRecipe.Title);
console.log(`Serves: ${moreFavoriteRecipe.Serves}`);
console.log("Ingredients:");
moreFavoriteRecipe.Ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let lastFavoriteRecipe = {
  Title: "Moi Moi",
  Serves: 5,
  Ingredients: ["beans", "egg", "olive oil", "bell pepper", "crayfish"],
};
console.log(lastFavoriteRecipe.Title);
console.log(`Serves: ${lastFavoriteRecipe.Serves}`);
console.log("Ingredients:");
lastFavoriteRecipe.Ingredients.forEach((ingredient) => {
  console.log(ingredient);
});