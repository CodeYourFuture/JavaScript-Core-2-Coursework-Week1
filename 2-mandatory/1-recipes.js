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
   ChickenSoup: {
   title: "Chicken Soup",
   serves: 4,
   ingredients: ["chicken", "double cream", "eggs"] 
   },
    Pasta:{
     title: "Pasta",
     serves: 3,
     ingredients: ["pasta", "mince meat", "sauce"]
   },
    Rice: {
     title: "Rice",
     serves: 5,
     ingredients: ["rice", "butter", "chicken"]
   },
    Lasagna: {
    title: "Lasagna",
    serves: 3,
    ingredients: ["pasta","bechamel sauce", "mince meat"]
   },
    AvocadoToast: {
     title: "Avocado Toast",
     serves: 1,
     ingredients: ["egg", "avocado", "feta cheese"]
   }
 }

 function getRecipe(recipe) {
   console.log(recipe.title);
   console.log(`Serves: ${recipe.serves}`);
   console.log("Ingredients:")
   recipe.ingredients.forEach((element) => console.log(element));
   console.log();
 }
 getRecipe(recipes.ChickenSoup);
 getRecipe(recipes.Pasta);
 getRecipe(recipes.Rice);
 getRecipe(recipes.Lasagna);
 getRecipe(recipes.AvocadoToast);