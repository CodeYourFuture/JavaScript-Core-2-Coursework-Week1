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
function Recipe(title, serves, ingredients) {
    this.title = title,
    this.serves = serves,
    this.ingredients = ingredients
  }
// USE CONSTRCUTOR TO BUILD OBJECTS QUICKLY
let receipeOne = new Recipe("Friedrice", 1, ["vege","oil","chicken","rice"]);
//let receipeTwo = new Recipe('anna@mariocorp.com', 'anna', 33, "F", "£90" );
 console.log(receipeOne)