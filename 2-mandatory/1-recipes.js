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
const recipe1 ={
  Title:"Rice and lamb",
  servings: 5,
  ingredients:[
    "1.5KG Rice",
    "1KG Lamb meat",
    " 1sp salt",
    " 1sp pepper",
    "1sp turmeric",
    "3sp tomato paste",
    "1l water",
  ],
};

console.log(recipe1.Title);
console.log(`serves:${recipe1.servings}`);
console.log(recipe1.ingredients);





const recipe2 = {
  Title: "Rice and chicken",
  servings: 3,
  ingredients: [
    "1KG Rice",
    "1KG chicken meat",
    " 1sp salt",
    " 1sp pepper",
    "1sp turmeric",
    "3sp tomato paste",
    "0.5l water",
  ],
};

console.log(recipe2.Title);
console.log(`serves:${recipe2.servings}`);
console.log(recipe2.ingredients);


const recipe3 = {
  Title: "Rice and kebab",
  servings: 4,
  ingredients: [
    "1.5KG Rice",
    "1.5KG Lamb meat",
    " 1sp salt",
    " 1sp pepper",
    "3 fresh lemons",
    "1l water",
  ],
};

console.log(recipe3.Title);
console.log(`serves:${recipe3.servings}`);
console.log(recipe3.ingredients);


const recipe4 = {
  Title: "Rice and lamb and aubergine",
  servings: 5,
  ingredients: [
    "1.5KG Rice",
    "1KG Lamb meat",
    "4 aubergine",
    " 1sp salt",
    " 1sp pepper",
    "1sp turmeric",
    "3 fresh lemons",
    "3sp tomato paste",
    "1l water",
  ],
};

console.log(recipe4.Title);
console.log(`serves:${recipe4.servings}`);
console.log(recipe4.ingredients);



const recipe5 = {
  Title: "Rice and lamb and zucchini",
  servings: 5,
  ingredients: [
    "1.5KG Rice",
    "1KG Lamb meat",
    "4 medium zucchini",
    " 1sp salt",
    " 1sp pepper",
    "1sp turmeric",
    "3sp tomato paste",
    "1l water",
  ],
};

console.log(recipe5.Title);
console.log(`serves:${recipe5.servings}`);
console.log(recipe5.ingredients);

