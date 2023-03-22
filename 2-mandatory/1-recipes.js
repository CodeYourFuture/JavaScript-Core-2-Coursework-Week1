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

let recipes ={
  Flan : {
    Serves: 6,
    Ingredients: ["condensed milk", "eggs", "sugar", "milk", "vanilla extract"]

  },
  Paella: {
    Serves: 8,
    Ingredients:["rice", "chorizo", "pork", "chicken", "vegetable stock", "saffron", "turmeric", "onion", "garlic"]
  },
  Salad: {
    Serves: 4,
    Ingredients: ["tomatoes", "lettuce", "pears", "spinach", "rocket", "blue cheese", "feta cheese", "croutons", "dressing"]
  },
  Milkshake: {
    Serves: 4,
    Ingredients: ["mango", "strawberries", "vanilla ice cream", "milk"]
  },
  Brownies: {
    Serves: 6,
    Ingredients: ["cocoa powder", "butter", "dark chocolate", "sugar", "eggs"]
  }

};

Object.entries(recipes).forEach(([name, recipe]) => {
  console.log(name);
  console.log(`Serves: ${recipe.Serves}`);
  console.log(`Ingredients:`);
  for(let ingredient of recipe.Ingredients){
    console.log(ingredient);
  }
})