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
  fish: {
    title: "Fish & Chips",
    servings: 4,
    ingredients: ["Fish", "Potatoes", "Oil", "Salt", "Vinegar"],
  },
  chicken: {
    title: "Chicken Stew",
    servings: 5,
    ingredients: [
      "6 to 8 pieces of chicken",
      "Salt and pepper",
      "2 onions",
      "2 garlic cloves",
      "3 large carrots",
      "1/2 cup (125 ml) white wine (or water)",
      "3 tbsp (35g) flour",
      "4 large potatoes ones",
    ],
  },
  Beef: {
    title: "Beef Pot Roast",
    serving: 6,
    ingredients: [
      "2 kg / 4 lb beef chuck roast ",
      "2 tbsp olive oil",
      "1 onion (large)",
      "5 garlic cloves",
      "5 carrots",
      "1 cup (250ml) dry red wine",
    ],
  },
};

const keys = Object.keys(recipes);

for (let key of keys) {
  console.log(recipes[key]);
}
