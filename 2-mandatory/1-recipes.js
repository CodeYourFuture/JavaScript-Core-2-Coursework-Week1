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

let recipes = {
  latam:{
    title: `papato`,
    serves: 2,
    ingredients: ["tomate", "garlic", "cinamon" , "water"]
  },

    comala:{
      title: `panel`,
      serves: 5,
      ingredients: ["potato", "onioon", "milk" , "water"]
  },

  torta:{
    title: `tea`,
    serves: 3,
    ingredients: ["claves", "cucumber", "ice" , "coffe"]
  }
};

function printOut(food) {
  console.log(recipes[food]["title"]);
  console.log("serves:" + recipes[meals]["serves"]);
  console.log("ingredients;" + recipes[meals])
  ["ingredients"].map(x=> x + " \n ");
}

console.log("latam");
console.log("comala");
console.log("torta");
