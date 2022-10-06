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
  picapau:{
    title : `Picapau`,
    servings: 2,
    ingerdiants:["beef" ,"garlic", "  mustard powder" , "onions ", " olive oil"]
    },
  cuscuz:{
    title : `Cuscuz`,
    servings: 4,
    ingerdiants:[" self-raising flour", "sugar" ,"water"]
    },
  RoastLamb :{
    title : `Roast lamb`,
    servings: 3,
    ingerdiants:["lamb shoulder" ,"onion", "lemon"]
    },
    caiperinha :{
    title : `Brasilian caiperinha`,
    servings: 10,
    ingerdiants:["cachaca" ,"lemon", "ice" , "sugar cane"]
    }
}
function printOut(meals) {
console.log( recipes[meals]["title"]);
console.log("Serves: " +  recipes[meals]["servings"]);
console.log(" Ingredients:" + recipes[meals]["ingerdiants"].map(x=> x + " \n "));  
}

printOut("picapau");
printOut("cuscuz");
printOut("RoastLamb");
printOut("caiperinha");