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
  let recipe1 = {
    title: 'Mole',
    servings: 2,
    ingredients:['cinnamon','cumin','cocoa']
  }
  console.log(recipe1.title);
  console.log(recipe1.servings);
  recipe1.ingredients.forEach(element=>console.log(element));

  let recipe2 = {
    title: "fish and chip",
    servings: 1,
    ingredients: ["fried fish", "fried chips", "tomato sauce"],
  };
  console.log(recipe2.title);
  console.log(recipe2.servings);
  recipe2.ingredients.forEach((element) => console.log(element));

 let recipe3 = {
   title: "Ravioli Spinach Soup",
   servings: 2,
   ingredients: ["ravioli", "spinach"],
 };
 console.log(recipe3.title);
 console.log(recipe3.servings);
 recipe3.ingredients.forEach((element) => console.log(element));

 let recipe4 = {
   title: "Lasagna",
   servings: 2,
   ingredients: ["pasta", "cheese", "tomato sauce"],
 };
 console.log(recipe4.title);
 console.log(recipe4.servings);
 recipe4.ingredients.forEach((element) => console.log(element));

 let recipe5 = {
   title: "Beef Chili",
   servings: 3,
   ingredients: ["Beef mince", "chili", "cheese"],
 };
 console.log(recipe5.title);
 console.log(recipe5.servings);
 recipe5.ingredients.forEach((element) => console.log(element));





