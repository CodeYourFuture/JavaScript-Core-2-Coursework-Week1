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

let favoriteRecipe = [
  {
    title: "Ghormehsabzi",
    serving: 10,
    ingredients: ["Loobia", "Sabzi", "Berenj"],
  },
  {
    title: "ZereshkPoloBaMorgh",
    serving: 8,
    ingredients: ["Zereshk", "Morgh", "Berenj"],
  },
  {
    title: "Gheimeh",
    serving: 9,
    ingredients: ["Lappeh", "Goosht", "Berenj"],
  },
  {
    title: "AdasPolo",
    serving: 5,
    ingredients: ["Adas", "Goosht", "Berenj"],
  },
  {
    title: "Fesenjoon",
    serving: 4,
    ingredients: ["Gerdoo", "Morgh", "Berenj"],
  },
];

favoriteRecipe.forEach(elements => {
  console.log(elements.title);
  console.log(`Serves: ${elements.serving}`);
  console.log("Ingredients:");
  console.log(elements.ingredients[0]);
  console.log(elements.ingredients[1]);
  console.log(elements.ingredients[2]);
  console.log(`\n`)
})
