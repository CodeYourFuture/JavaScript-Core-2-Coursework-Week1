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

  // write code below

  let desert = {
    title: "Mousse",
    servings: 6,
    ingredients: ["cream", "eggs", "sugar", "fruit"],
  };
  console.log(desert.title);
  console.log(`Serves: ${desert.servings}`);
  console.log("Ingredients:");
  desert.ingredients.forEach((ingredient) => console.log(ingredient));


  let entree= {
    title: "Coquilles Saint Jacques",
    servings: 6,
    ingredients: ["cream", "scallops", "seasoning", "breadcrumbs"],
  };
  console.log(entree.title);
  console.log(`Serves: ${entree.servings}`);
  console.log("Ingredients:");
  entree.ingredients.forEach((ingredient) => console.log(ingredient));
 
  
  let mains= {
    title: "Low Carb Lasagna",
    servings: 6,
    ingredients: ["aubergine", "beef", "mushrooms", "sauce"],
  };
  console.log(mains.title);
  console.log(`Serves: ${mains.servings}`);
  console.log("Ingredients:");
  mains.ingredients.forEach((ingredient) => console.log(ingredient));