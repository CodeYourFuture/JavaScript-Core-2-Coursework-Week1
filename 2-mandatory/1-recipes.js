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
/////////////////////////////////////////////////////////////////////////////////

const recipeOne = {
    title: "Tacos",
    servings: 4,
    ingredients: ['Tortilla', 'Beef', 'Pico de gallo', 'Guacamole']
  };

  console.log(recipeOne.title);
  console.log(`Serves: ${recipeOne.servings}`);
  console.log('Ingredients: ');
  recipeOne.ingredients.forEach((ingredient) =>
  console.log(ingredient));

////////////////////////////////////////////////////////////////////////////////////

  const recipeTwo = {
    title: "Burritos",
    servings: 4,
    ingredients: ['Tortilla Wrap', 'Pork', 'Pico de gallo', 'Guacamole', 'Cheese', 'Red Kidney Beans']
  };

  console.log(recipeTwo.title);
  console.log(`Serves: ${recipeTwo.servings}`);
  console.log('Ingredients: ');
  recipeTwo.ingredients.forEach((ingredient) =>
  console.log(ingredient));


  /////////////////////////////////////////////////////////////////////////////////////

  const recipeThree = {
    title: "Pupusas",
    servings: 4,
    ingredients: ['Rice Tortilla', 'Mozzarella Cheese', 'Chedar Cheese', 'Red Kidney Beans']
  };

  console.log(recipeThree.title);
  console.log(`Serves: ${recipeThree.servings}`);
  console.log('Ingredients: ');
  recipeThree.ingredients.forEach((ingredient) =>
  console.log(ingredient));


  /////////////////////////////////////////////////////////////////////////////////////

  const recipeFour = {
    title: "Pasta",
    servings: 6,
    ingredients: ['Pasta', 'Tomato Sauce', 'Chedar Cheese', 'Meat balls']
  };

  console.log(recipeFour.title);
  console.log(`Serves: ${recipeFour.servings}`);
  console.log('Ingredients: ');
  recipeFour.ingredients.forEach((ingredient) =>
  console.log(ingredient));


  /////////////////////////////////////////////////////////////////////////////////////

  const recipeFive = {
    title: "Chicken Sandwich",
    servings: 6,
    ingredients: ['Chicken breast', 'Bread', 'Chedar Cheese', 'Tomato', 'Spinach', 'Ketchup', 'Mayonnaise', 'Mustard']
  };

  console.log(recipeFive.title);
  console.log(`Serves: ${recipeFive.servings}`);
  console.log('Ingredients: ');
  recipeFive.ingredients.forEach((ingredient) =>
  console.log(ingredient));


  /////////////////////////////////////////////////////////////////////////////////////