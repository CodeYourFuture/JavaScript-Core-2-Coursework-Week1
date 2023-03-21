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

const recipe1 = {
    title: 'Borshch',
    servings: 4,
    ingredients: ['0/5 cabbage', '2 beetroots', '4 potatos', '2 carrots', '1 onion', '500g pork']
}

const recipe2 = {
    title: 'Omelet',
    servings: 2,
    ingredients: ['eggs', 'milk', 'salt']
}

const recipe3 = {
    title: 'Cheesy Chicken rolls',
    servings: 4,
    ingredients: ['eggs', 'cheese', 'chicken breasts', 'mayonnaise', 'onions']
}

const recipe4 = {
    title: 'Carbonara',
    servings: 3,
    ingredients: ['spaghetti', 'egg yellow', 'cream', 'beckon']
}

const recipe5 = {
    title: 'Pumpkin cake',
    servings: 5,
    ingredients: ['flour', 'eggs', 'sunflower oil', 'cinnamon', 'ginger']
}

const printOutRecipe = (recipe) => {
    console.log(recipe.title);
    console.log(recipe.servings);
    console.log('Ingredients');
    console.log(recipe.ingredients.forEach(el=>console.log(el)));
}

printOutRecipe(recipe1);
printOutRecipe(recipe2);
printOutRecipe(recipe3);
printOutRecipe(recipe4);
printOutRecipe(recipe5);