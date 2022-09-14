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
  easyEggFriedRice: {
    title: `Easy egg-fried rice`,
    servings: 2,
    ingerdiants: [
      "250g long grain rice",
      "3 tbsp vegetable oil",
      "1 onion, finely chopped",
      "4 eggs, beaten",
      "2 spring onion, sliced, to serve",
      " olive oil",
    ],
  },
  smokedMackerelRisotto: {
    title: `Smoked mackerel risotto`,
    servings: 3,
    ingerdiants: [
      "1 tbsp butter",
      "1 onion, finely chopped",
      "250 risotte rice",
      "100ml white wine",
      "1l begetable stock",
      "1 x 240 pack smoked mackerel",
      "2 spring onions, sliced",
      "100g bag fresh spinach",
    ],
  },
  RoastLamb: {
    title: `Roast lamb`,
    servings: 8,
    ingerdiants: [
      "carrots",
      "onion",
      "small bunch parsley",
      "thyme leaf",
      "lemon",
    ],
  },
  Scampi: {
    title: `Scampi with tartare sauce`,
    servings: 2,
    ingerdiants: [
      "cornflour",
      "sparkling water",
      "beer",
      "Dublin Bay prawn tails",
      " olive oil",
    ],
  },
};
function printOut(meals) {
  console.log(recipes[meals]["title"]);
  console.log("Serves: " + recipes[meals]["servings"]);
  console.log(
    " Ingredients:" + recipes[meals]["ingerdiants"].map((x) => x + " \n ")
  );
}

printOut("easyEggFriedRice");
printOut("smokedMackerelRisotto");
printOut("RoastLamb");
printOut("Scampi");
