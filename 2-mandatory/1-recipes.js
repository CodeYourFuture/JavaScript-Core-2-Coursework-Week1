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
const recipe1 = {
    name: "Coffee",
    serves: 2,
    Ingredients: ["coffee", "water", "sugar"]
  };

const recipe2 = {
    name: "Kompot",
    serves: 8,
    Ingredients: ["dry fruits", "water", "sugar"]
  };

const recipe3 = {
    name: "Buckwheat",
    serves: 4,
    Ingredients: ["buckwheat", "water", "salt", "butter"]
  };

const recipe4 = {
    name: "Rice",
    serves: 4,
    Ingredients: ["Rice", "water", "salt", "butter"]
  };

const recipe5 = {
    name: "Smashed potato",
    serves: 4,
    Ingredients: ["potato", "water", "salt", "butter"]
  };

  function printRecipe(recipe){
    console.log(recipe.name);
    console.log(`Serves: ${recipe.serves}`);
    console.log(`Ingredients: `);
    recipe.Ingredients.forEach(element => {console.log(element);
    });
    
  }

  printRecipe(recipe1);