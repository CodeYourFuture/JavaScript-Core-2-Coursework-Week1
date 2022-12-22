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

myFavouriteRiceDish = {
  Title: "Pelau",
  Serves: 4,
  Ingredients: ["rice", "pigeon peas", "carrots", "pumpkin", "coconut milk"],
};

function getObjKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

console.log(myFavouriteRiceDish.Title);

console.log(getObjKey(myFavouriteRiceDish, 4));

console.log(`Serves:${myFavouriteRiceDish.Serves}`);
console.log("Ingredients");
console.log(myFavouriteRiceDish.Ingredients[0]);
console.log(myFavouriteRiceDish.Ingredients[1]);
console.log(myFavouriteRiceDish.Ingredients[2]);
console.log(myFavouriteRiceDish.Ingredients[3]);
console.log(myFavouriteRiceDish.Ingredients[4]);

myFavouriteSoup = {
  Title: "Chicken Foot Soup",
  Serves: 6,
  Ingredients: [
    "20 chicken feet",
    "1/2lb split peas",
    "3 potatoes",
    "3 green figs",
  ],
};

console.log(myFavouriteSoup.Title);
console.log(`Serves:${myFavouriteSoup.Serves}`);
console.log("Ingredients");
console.log(myFavouriteSoup.Ingredients[0]);
console.log(myFavouriteSoup.Ingredients[1]);
console.log(myFavouriteSoup.Ingredients[2]);
console.log(myFavouriteSoup.Ingredients[3]);

myFavouriteCurryDish = {
  Title: "Curry Goat",
  Serves: 6,
  Ingredients: [
    "2.5lbs of Goat Leg",
    "Chief Curry Powder",
    "5 Leaves of Chadon Beni",
    "1 large Onion Diced",
    "5 cloves of Garlic",
    "1 piece Ginger",
    "Salt to taste",
  ],
};

console.log(myFavouriteCurryDish.Title);
console.log(`Serves:${myFavouriteCurryDish.Serves}`);
console.log("Ingredients");
console.log(myFavouriteCurryDish.Ingredients[0]);
console.log(myFavouriteCurryDish.Ingredients[1]);
console.log(myFavouriteCurryDish.Ingredients[2]);
console.log(myFavouriteCurryDish.Ingredients[3]);
console.log(myFavouriteCurryDish.Ingredients[4]);
console.log(myFavouriteCurryDish.Ingredients[5]);
console.log(myFavouriteCurryDish.Ingredients[6]);

myFavouritePastaDish = {
  Title: "Macaroni Pie",
  Serves: 8,
  Ingredients: ["Cheese", "Evaporated milk", "Butter", "Seasoning", "Macaroni"],
};

console.log(myFavouritePastaDish.Title);
console.log(`Serves:${myFavouritePastaDish.Serves}`);
console.log("Ingredients");
console.log(myFavouritePastaDish.Ingredients[0]);
console.log(myFavouritePastaDish.Ingredients[1]);
console.log(myFavouritePastaDish.Ingredients[2]);
console.log(myFavouritePastaDish.Ingredients[3]);
console.log(myFavouritePastaDish.Ingredients[4]);

myFavouriteSalad = {
  Title: "Potato Salad",
  Serves: 4,
  Ingredients: [
    "4 potatoes",
    "1 lg beetroot",
    "5 table spoons of Mayonaise",
    "1 teaspoon mustard",
    "1 can peas and carrots",
  ],
};

console.log(myFavouriteSalad.Title);
console.log(`Serves:${myFavouriteSalad.Serves}`);
console.log("Ingredients");
console.log(myFavouriteSalad.Ingredients[0]);
console.log(myFavouriteSalad.Ingredients[1]);
console.log(myFavouriteSalad.Ingredients[2]);
console.log(myFavouriteSalad.Ingredients[3]);
console.log(myFavouriteSalad.Ingredients[4]);
