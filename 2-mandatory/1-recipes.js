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
let favoriteRecipe1 = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};
let favoriteRecipe2 = {
  title: "Lentil Soup",
  servings: 3,
  ingredients: ["Red Lentil", "Tomato paste", "Carrot", "Onion"]
};
let favoriteRecipe3 = {
  title: "Oatmeal",
  servings: 4,
  ingredients: ["oats", "sugar", "cinnamon", "milk", "salt"]
};
let favoriteRecipe4 = {
  title: "Pasta",
  servings: 4,
  ingredients: ["pasta", "oil", "cheese", "milk", "salt"]
};
let favoriteRecipe5 = {
  title: "Pancakes",
  servings: 4,
  ingredients: ["eggs","flour","coconut oil","baking powder","sugar","milk"]
};

const favoriteRecipe = [
  favoriteRecipe1,
  favoriteRecipe2,
  favoriteRecipe3,
  favoriteRecipe4,
  favoriteRecipe5,
];
for (let i = 0; i < favoriteRecipe.length; i++) {
  console.log(favoriteRecipe[i].title);
  console.log("Serves: " + favoriteRecipe[i].servings);
  console.log("Ingredients:");
  favoriteRecipe[i].ingredients.forEach((item) => console.log(item));
}
