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
  title : "Bread1",
  serves : 2,
  ingredients : ["Water", "Salt", "Flour"]
 };
  
 const recipe2 = {
   title: "Bread2",
   serves: 2,
   ingredients: ["Water", "Salt", "Flour","Oil"],
 };
   
 const recipe3 = {
   title: "Bread3",
   serves: 2,
   ingredients: ["Water", "Salt", "Gluten-free-flour"],
 };
   
 const recipe4 = {
   title: "Bread4",
   serves: 2,
   ingredients: ["Water", "Salt", "Flour", "Sesame"],
 };
   
 const recipe5 = {
   title: "Bread5",
   serves: 2,
   ingredients: ["Water", "Salt", "Flour", "Olive"],
 };

 const allRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5];

 allRecipes.forEach((recipe) =>{
  console.log(`Recipe: ${recipe.title}`);
  console.log(`Serves: ${recipe.serves}`);
  console.log("Ingredients:");
  recipe.ingredients.forEach((ingredient) =>
    console.log(ingredient));
    console.log("-------------");
 });
 


