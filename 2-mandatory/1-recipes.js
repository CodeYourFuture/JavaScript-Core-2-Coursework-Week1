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
let recipe = { 
  frenchToast :{
  title: "French Toast",
  servings: 6,
  ingredients: ["4 large eggs", "1 cup 2% milk", "2 tablespoons sugar", "2 teaspoons vanilla extract", "1/8 teaspoon salt", "12 slices day-old sandwich bread"]
  },
  homemadeSpaghettiSauce :{
    title: "Homemade Spaghetti Sauce",
    servings:  12,
    ingredients: ["2 pounds ground beef", "1/2 cup water", "Hot cooked spaghetti", "4 cans (6 ounces each) tomato paste", "3/4 pound bulk Italian sausage"]
  },
 fruitSalad :{
  title: "Brunch Fruits Salad",
  servings: 10,
  ingredients: ["1 can (20 ounces) pineapple chunks", "2 large firm bananas, cut into 1/4-inch chunks", "1 cup of green grapes", "1 can (15 ounces) mandarin oranges", "1 medium red apple"]
 },  
 vanillaFrosting :{
  title: "Vanilla Buttercream Frosting",
  servings: 5,
  ingredients: ["1/2 cup butter, softened", "4-1/2 cups confectioners' sugar", "1-1/2 teaspoons vanilla extract", "5 to 6 tablespoons 2% milk"]
 },
 garlicBread :{
  title: "Garlic Bread",
  servings: 8,
  ingredients: ["1/2 cup butter, melted", "3 to 4 garlic cloves, minced", "1 loaf (1 pound) French bread, halved lengthwise", "2 tablespoons minced fresh parsley"]
 }
 }
  
  // write code here
  console.log(recipe.frenchToast);
  console.log (recipe.frenchToast.ingredients)