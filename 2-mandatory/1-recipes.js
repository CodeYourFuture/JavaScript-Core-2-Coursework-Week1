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
let myRecipes = {
  vegtableSoup: {
    title: "vegetable Soup",
    serving: 4,
    ingredients: ["lentil", "tomato", "carrot", "celery"],
  },
  chickenBallotin: {
    title: "Chicken Ballotine",
    serving: 2,
    ingredients: ["chicken breast", "garlic", "parsley", "mushroom", "double creem"],
  },
  chocBrownie: {
    title: "Choc Brownie",
    serving: 2,
    ingredients: ["plain flour", "sugar", "dark choclate", "butter", "double creem", "bicarbonate of soda"],
  },
  carrotCake: {
    title: "Carrot Cake",
    serving: 2,
    ingredients: ["grated carrot", "brown sugar", "wholemeal flour", "oil", "cinnamon", "baking powder"],
  },
  cheeseSouffle: {
    title: "Cheese Souffle",
    serving: 4,
    ingredients: ["grated cheese", "egg yolk", "egg white", "milk", "butter", "flour"],
  }
}

function getRecipe(nameOfTheRecipe) {
  for (let recipe in myRecipes) {
    console.log(myRecipes[recipe].title);
    console.log(`Serves : ${myRecipes[recipe].serving}`);
    console.log("Ingredients : ");
    myRecipes[recipe].ingredients.forEach(ingredient => {
      console.log(ingredient)
    });
    console.log('\n');
  }

}

getRecipe(myRecipes.vegtableSoup);
getRecipe();
getRecipe();
getRecipe();
getRecipe();