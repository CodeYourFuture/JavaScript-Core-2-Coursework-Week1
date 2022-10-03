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
function RecipeCard(title, servings, ingredients) {
  (this.title = title),
    (this.servings = servings),
    (this.ingredients = ingredients)
   
}

/*1*/ let recipeOne  = new RecipeCard("Biriyani", 6, [ "meat", "spices", "oil",]);
/*2*/ let recipeTwo = new RecipeCard("VegetableCurry", 4, ["vegetables", "turmeric", "onion"]);
/*3*/ let recipeThree = new RecipeCard("AluVorta", 4, ["potato", "musturd oil", "chillies"]);
/*4*/ let recipeFour = new RecipeCard("Payesh", 2, ["dried rice", "sugar", "milk"]);
/*5*/ let recipeFive = new RecipeCard("TalerPitha", 5, ["plusm", "sugar", "milk"]);
 

console.log(`${recipeOne.title}`)
console.log(`Serves: ${recipeOne.servings}`)
console.log(`Ingredients: 
${recipeOne.ingredients[0]}
${recipeOne.ingredients[1]}
${recipeOne.ingredients[2]}`);


console.log(`${recipeTwo.title}`);
console.log(`Serves: ${recipeTwo.servings}`);
console.log(`Ingredients: 
${recipeTwo.ingredients[0]}
${recipeTwo.ingredients[1]}
${recipeTwo.ingredients[2]}`);


console.log(`${recipeThree.title}`);
console.log(`Serves: ${recipeThree.servings}`);
console.log(`Ingredients: 
${recipeThree.ingredients[0]}
${recipeThree.ingredients[1]}
${recipeThree.ingredients[2]}`);



console.log(`${recipeFour.title}`);
console.log(`Serves: ${recipeFour.servings}`);
console.log(`Ingredients: 
${recipeFour.ingredients[0]}
${recipeFour.ingredients[1]}
${recipeFour.ingredients[2]}`);

console.log(`${recipeFive.title}`);
console.log(`Serves: ${recipeFive.servings}`);
console.log(`Ingredients: 
${recipeFive.ingredients[0]}
${recipeFive.ingredients[1]}
${recipeFive.ingredients[2]}`);