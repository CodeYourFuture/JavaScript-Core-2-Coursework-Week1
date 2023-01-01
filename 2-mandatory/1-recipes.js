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
myFavouriteRecipes = [
  (myFavouriteRiceDish = {
    title: "Pelau",
    servings: 4,
    ingredients: ["rice", "pigeon peas", "carrots", "pumpkin", "coconut milk"],
  }),
  (myFavouriteSoup = {
    title: "Chicken Foot Soup",
    servings: 6,
    ingredients: [
      "20 chicken feet",
      "1/2lb split peas",
      "3 potatoes",
      "3 green figs",
    ],
  }),
  (myFavouriteCurryDish = {
    title: "Curry Goat",
    servings: 6,
    ingredients: [
      "2.5lbs of Goat Leg",
      "Chief Curry Powder",
      "5 Leaves of Chadon Beni",
      "1 large Onion Diced",
      "5 cloves of Garlic",
      "1 piece Ginger",
      "Salt to taste",
    ],
  }),
  (myFavouritePastaDish = {
    title: "Macaroni Pie",
    servings: 8,
    ingredients: [
      "Cheese",
      "Evaporated milk",
      "Butter",
      "Seasoning",
      "Macaroni",
    ],
  }),
  (MyFavouriteSalad = {
    title: "Potato Salad",
    servings: 4,
    ingredients: [
      "4 potatoes",
      "1 lg beetroot",
      "5 table spoons of Mayonaise",
      "1 teaspoon mustard",
      "1 can peas and carrots",
    ],
  }),
];


function getRecipes(recipeArray) {
  return (
    "Recipes: \n" +
    recipeArray.reduce((accumulator, item) => {
      return (
        accumulator +
        `${item.title},  
Serves: ${item.servings},
Ingredients: \n${item.ingredients.reduce((acc, item)=> acc+ item +'\n')}`
      );
    })
  );
}

console.log(getRecipes(myFavouriteRecipes));

//have added some guidance to slack conve :-)
//Thank you...
//console.log(myFavouriteCurryDish.Title);

myFavouriteRiceDish = {
  Title: "Pelau",
  Serves: 4,
  Ingredients: ["rice", "pigeon peas", "carrots", "pumpkin", "coconut milk"],
};
