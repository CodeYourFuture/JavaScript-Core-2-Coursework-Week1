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
let recipeFavs = {

  pizza:{
   title: "Hawaian",
   servings: 1,
   ingredients: ["base", "pineapple", "cheese", "green peppers", "tomatoes"],
 },
 
  kentucky: {
   title: "Streetwise2",
   servings: 2,
   ingredients: ["chicken", "chips"],
 },
 
  steers: {
   title: "Wacky Wednesday",
   servings: 4,
   ingredients: ["burger rolls", "burger patty", "onions", "tomato", "lettuce", "sauce"],
 },
 
  gatspy: {
   title: "Rootie Gatspy",
   servings: 1,
   ingredients: ["rootie", "chips", "steak", "salads"],
 },
 
  wimpyBreakfeast: {
   title: "Good morning breakfeast",
   servings: 2,
   ingredients: ["eggs", "bangers", "bread", "bacon"],
 },
 }
 
 console.log(recipeFavs.pizza);
 console.log(recipeFavs.kentucky);
 console.log(recipeFavs.steers);
 console.log(recipeFavs.gatspy);
 console.log(recipeFavs.wimpyBreakfeast);
// write code here