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
let Recipes ={
Mole: {
name: "Mole",
serves: 2,
Ingredients: ["cinnamon", "cumin", "cocoa",],
},

BananaBread: {
name: "Banana bread",
serves: 10,
Ingredients: ["bananas", "eggs", "brown sugar", "vegetable oil", "flour", "baking powder", "mixed spice",],

},

Brownies: {
  name: "Brownies",
  serves: 16,
  Ingredients: ["butter", "sugar", "eggs", "vanilla extract", "flour", "salt", "baking powder",],
},

Frosting: {
  name: "Frosting",
  serves: 12,
  Ingredients: ["softened butter", "unsweetened cocoa powder", "honey", "vanilla extract", "confectioners' sugar",],
},

StrawberryShortCake: {
  name: "Strawberry Shortcake",
  serves: 6,
  Ingredients: ["strawberries", "sugar", "flour", "baking powder", "salt", "shortening", "eggs", "milk", "whipped heavy cream",],
},
} 

function allRecipes(recipe) {
  console.log(Recipes[recipe]["name"]);
  console.log("Serves: " + Recipes[recipe]["serves"]);
 console.log("Ingredients: " + "\n" + Recipes[recipe]["Ingredients"].map(x => x + "\n" ).join('\r'));
// console.log("Ingredients: ")
// console.log( Recipes[recipe]["Ingredients"].join('\r\n'));
}
allRecipes("Mole");
allRecipes("BananaBread");
allRecipes("Brownies");
allRecipes("Frosting");
allRecipes("StrawberryShortCake");