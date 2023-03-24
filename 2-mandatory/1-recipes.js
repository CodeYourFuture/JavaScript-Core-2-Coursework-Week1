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

let recipeCard = [		
		{
		title: "Avocado Smoothie",
		servings: 1,
		ingredients: ['avocado', 'oat milk', 'peanut butter', 'honey'],
		},
    {
    title: “Oat Smoothie”,
    servings: 1,
    ingredients: ['oats', 'milk', 'greek yogurt', 'honey'],
    },

   {
   title: “pancakes”,
   servings: 1,
   ingredients: ['egg', 'butter', 'oat flour', 'oat milk', 'banana'] ,
   },

   {
   title: “carrot soup" ,
   servings: 1,
   ingredients: ['chicken soup', 'carrot', 'onion', 'olive oil'],
   },

   { 
   title: “Bravas potatoes",
   servings: 1,
   ingredients: ['potatoes', 'paprika', 'garlic', 'parsley'],
   },

   ];

   recipeCard.forEach((recipe) => {
   console.log(recipe.title);
   console.log(recipe.servings);
   console.log(`Serves: ${recipe.servings}`);
   recipe.ingredients.forEach((ingredient) => console.log(ingredient));
   console.log("\n")
});



