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

let theRecipeCard  =[ {
  title : 'Mole1',
  serves : 1,
  ingredients : ['cinnamon1', 'cumin1', 'cocoa1']
},
{
  title : 'Mole2',
  serves : 2,
  ingredients : ['cinnamon2', 'cumin2', 'cocoa2']
},
{
  title : 'Mole3',
  serves : 3,
  ingredients : ['cinnamon3', 'cumin3', 'cocoa3']
},
{
  title : 'Mole4',
  serves : 4,
  ingredients : ['cinnamon4', 'cumin4', 'cocoa']
},

{
  title : 'Mole',
  serves : 5,
  ingredients : ['cinnamon', 'cumin', 'cocoa']
},
]

theRecipeCard.forEach(theRecipeCard => console.log(theRecipeCard.title,'\n', theRecipeCard.serves,'\n', theRecipeCard.ingredients))