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
let recipes = {
  tomatoSoup: {
    title: "Tomato Soup",
    serves: 4,
    ingredients: ["Tomato", "double cream", "black pepper"]
  },
  rice: {
    title: "Rice",
    serves: 5,
    ingredients: ["rice", "water", "butter"]
  },
  pasta: {
    title: "Pasta",
    serves: 4,
    ingredients: ["pasta", "mince meat", "sauce"]
  },
  friedEgg: {
    title: "FriedEgg",
    serves: 3,
    ingredients: ["egg", "butter", "oliveOil"]
  },
  pancake: {
    ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"],
    title: "Pancake",
    serves: 2
  },
  
}
// write code here
function getRecipes(recipes){

  console.log("\n");
  console.log(recipes.title);
  console.log(`Serves: ${recipes.serves}`);
  console.log("Ingredients:")
  console.log(recipes.ingredients.join("\n"))
}
getRecipes(recipes.tomatoSoup);
getRecipes(recipes.rice);
getRecipes(recipes.pasta);
getRecipes(recipes.friedEgg);
getRecipes(recipes.pancake);