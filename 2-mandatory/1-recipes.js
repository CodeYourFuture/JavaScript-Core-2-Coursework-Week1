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

let  recipes = {
  roastBeef :{
    title : `Roast beef`,
    servings: 6,
    ingredients:["peppercorn" ,"dried thyme", " English mustard powder" , " 8oz topside joint of beef","celery seeds", " olive oil"]
    },
  CherryAlmond :{
    title : `Cherry & almond tarts`,
    servings: 12,
    ingredients:["eggs" ," self-raising flour", "cherry jam" , "softened","ground almond"]
    },
  RoastLamb :{
    title : `Roast lamb`,
    servings: 8,
    ingredients:["carrots" ,"onion", "small bunch parsley" ,"thyme leaf", "lemon"]
    },
    Scampi :{
    title : `Scampi with tartare sauce`,
    servings: 2,
    ingredients:["cornflour" ,"sparkling water", "beer" ,"Dublin Bay prawn tails", " olive oil"]
    }
}
function printOut(meals) {
console.log( recipes[meals]["title"]);
console.log("Serves: " +  recipes[meals]["servings"]);
console.log(" Ingredients:" + recipes[meals]["ingredients"].map(x=> x + " \n "));  
}

printOut("roastBeef");
printOut("CherryAlmond");
printOut("RoastLamb");
printOut("Scampi"); 