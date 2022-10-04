/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients  ingredients (an array of strings)

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
let recipeOne={
    title:"English Breackfast",
    servings: 2,
     ingredients :["eggs","sausage","beans","bacons"]
  };

  console.log(recipeOne.title);
  console.log(`serves:${recipeOne.servings}`);
  console.log(`Ingredients: 
  ${recipeOne.ingredients[0]} 
  ${recipeOne.ingredients[1]}
  ${recipeOne.ingredients[2]}
  ${recipeOne.ingredients[3]}`);
//************************************************************ */
let recipeTwo={
  title:"Kebab Kobideh",
  servings: 5,
   ingredients :["rice","Tomato","Mince beef","mince lamb"]
};

console.log(recipeTwo.title);
console.log(`serves:${recipeTwo.servings}`);
console.log(`Ingredients: 
${recipeTwo.ingredients[0]} 
${recipeTwo.ingredients[1]}
${recipeTwo.ingredients[2]}
${recipeTwo.ingredients[3]}`);

//*************************************************************/

let recipeThree={
  title:"Fish and Chips",
  servings: 1,
   ingredients :["fish","potato"]
};

console.log(recipeThree.title);
console.log(`serves:${recipeThree.servings}`);
console.log(`Ingredients: 
${recipeThree.ingredients[0]} 
${recipeThree.ingredients[1]}`);

//*************************************************************/

let recipeFour={
  title:"chicken kebab",
  servings: 1,
   ingredients :["Chicken","onion","Paprika","Salt","black pepper"]
};

console.log(recipeFour.title);
console.log(`serves:${recipeFour.servings}`);
console.log(`Ingredients: 
${recipeFour.ingredients[0]} 
${recipeFour.ingredients[1]}
${recipeFour.ingredients[2]}
${recipeFour.ingredients[3]}
${recipeFour.ingredients[4]}`);


//*************************************************************/

let recipeFive={
  title:"lamb kebab",
  servings: 1,
   ingredients :["Lamb","onion","Paprika","Salt","black pepper"]
};

console.log(recipeFive.title);
console.log(`serves:${recipeFive.servings}`);
console.log(`Ingredients: 
${recipeFive.ingredients[0]} 
${recipeFive.ingredients[1]}
${recipeFive.ingredients[2]}
${recipeFive.ingredients[3]}
${recipeFive.ingredients[4]}`);

