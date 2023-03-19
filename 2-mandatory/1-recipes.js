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

let favouriteRecipes = [
  { name: "Mole", serves: 2, ingredients: ["cinnamon", "cumin", "cocoa"] },
  { name: "Cake", serves: 5, ingredients: ["flour", "eggs", "sugar"] },
  { name: "French Toast", serves: 1, ingredients: ["bread", "eggs", "milk"] },
  { name: "Pakora", serves: 3, ingredients: ["flour", "ginger", "potato"] },
  {
    name: "Baked Potato",
    serves: 2,
    ingredients: ["tuna", "cheese", "potato"],
  },
];

console.log(favouriteRecipes);
favouriteRecipes.forEach((element) => {
  console.log(element.name);
  console.log(`Serves: ${element.serves}`);
  console.log("Ingredients:");
  element.ingredients.forEach((ingredient) => {
    console.log(ingredient);
  });
});