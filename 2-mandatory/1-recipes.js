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
Object.entries(myFavoriteRecipe).forEach(([key, value]) => {
  console.log(`${key}: ${value}`.replace(/,/g, " "));
});

let FavoriteRecipe = {
  Title: "Plantain and egg",
  Serves: 2,
  Ingredients: ["plantain", "egg", "olive oil"],
};
Object.entries(FavoriteRecipe).forEach(([key, value]) => {
  console.log(`${key}: ${value}`.replace(/,/g, " "));
});

let anotherFavoriteRecipe = {
  Title: "Pepper soup",
  Serves: 3,
  Ingredients: ["pepper", "beef", "seasoning"],
};
Object.entries(anotherFavoriteRecipe).forEach(([key, value]) => {
  console.log(`${key}: ${value}`.replace(/,/g, " "));
});

let moreFavoriteRecipe = {
  Title: "Salad",
  Serves: 4,
  Ingredients: ["cabbage", "egg", "carrot", "sweet corn", "cucumber", "mayonnaise"],
};
Object.entries(moreFavoriteRecipe).forEach(([key, value]) => {
  console.log(`${key}: ${value}`.replace(/,/g, " "));
});

let lastFavoriteRecipe = {
  Title: "Moi Moi",
  Serves: 5,
  Ingredients: ["beans", "egg", "olive oil", "bell pepper", "crayfish"],
};
Object.entries(lastFavoriteRecipe).forEach(([key, value]) => {
  console.log(`${key}: ${value}`.replace(/,/g, " "));
});
