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

  let Recipe1  = {
    Title : "Hummus",
    Serves : 2,
    Ingredients : ["400g can chickpea","1 tbsp tahini paste","1 fat garlic clove","3 tbsp 0% fat Greek yogurt","good squeeze lemon juice"],
  };
  let Recipe2 = {
    Title : "Sweet & spicy popcorn",
    Serves :2,
    Ingredients : ["100g bag salted microwave popcorn","¼ tsp chilli powder","½ tsp cinnamon","1 tbsp agave syrup"],
  };
  let Recipe3 = {
    Title : "Instant frozen berry yogurt",
    Serves :2,
    Ingredients : ["250g frozen mixed berry","250g 0%-fat Greek yogurt","1 tbsp honey or agave syrup",]
  };
  let Recipe4 = {
    Title : "Potato wedges",
    Serves :2,
    Ingredients : ["3 large baking potatoes (around 1kg)","1 tbsp olive oil"]
  };
  let Recipe5 =  {
    Title : "Omelette roll-up",
    Serves :2,
    Ingredients : ["1 large egg","a little rapeseed or olive oil for frying","2 tbsp tomato salsa","1 tbsp fresh coriander"]
  };


function printRecipe(obj) {
  for ([key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
printRecipe(Recipe1)
printRecipe(Recipe2)
printRecipe(Recipe3)
printRecipe(Recipe4)
printRecipe(Recipe5)