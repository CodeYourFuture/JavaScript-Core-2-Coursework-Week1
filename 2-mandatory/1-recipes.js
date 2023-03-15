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
let favoriteRecipe=[
  {
    title:"food1",
    serving:7,
    ingredients:["cinnamon","cumin","cocoa"]
  },
  {
    title:"food2",
    serving:5,
    ingredients:["cinnamon","cumin","cocoa"]
  },
  {
    title:"food3",
    serving:4,  
    ingredients:["cinnamon","cumin","cocoa"]
  }
] 
favoriteRecipe.forEach(elements => {
  console.loge(elements.title);
  console.log(`Serve:${elements.serving}`);
  console.log(`Ingredients:`);
console.log(elements.ingredients[0]);
console.log(elements.ingredients[1]);
console.log(elements.ingredients[2]);
console.log(`\n`);
})