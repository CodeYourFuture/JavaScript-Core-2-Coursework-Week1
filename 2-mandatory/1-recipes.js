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
let recipePudding = {
  title: "Pudding",
  Serves: 1,
  Ingredients: [
    "Oranges",
    "Sugar",
    "Grand Marnier",
    "leftover Christmas pudding",
    "Pot custard",
  ],
};
console.log(recipePudding.title);
console.log(`Serves: ${recipePudding.Serves}`);
//console.log(`Ingredients: ${recipePudding.Ingredients}`);
console.log("Ingredients:");
for (item of recipePudding.Ingredients) {
  console.log(item);
}

let recipeScrambledEggs = {
  title: "Scramble Eggs",
  Serves: 2,
  Ingredients: [
    "4 Eggs",
    "2 Soft buns",
    "1 red onion",
    "red wine vinegar",
    "olive oil",
    "1 teaspoon garam masala",
    "200 g ripe tomatoes",
    "½ a bunch of coriander",
  ],
};
console.log(recipeScrambledEggs.title);
console.log(`Serves: ${recipeScrambledEggs.Serves}`);
console.log("Ingredients:");
for (item of recipeScrambledEggs.Ingredients) {
  console.log(item);
}

let recipeLamingtons = {
  title: "Lamingtons",
  Serves: 4,
  Ingredients: [
    "500 g unsalted butter",
    "250 g self-raising flour",
    "250 g golden caster sugar",
    "5 large free-range eggs",
    "100 ml milk",
  ],
};
console.log(recipeLamingtons.title);
console.log(`Serves:${recipeLamingtons.Serves}`);
console.log("Ingredients:");
for (item of recipeLamingtons.Ingredients) {
  console.log(item);
}

let recipeBakedLemonCheesecake = {
  title: "Baked lemon cheesecake",
  Serves: 2,
  Ingredients: [
    "100 g unsalted butter",
    "250 g Lotus Biscoff or ginger nut biscuits",
    "4 large eggs",
    "1 teaspoon vanilla bean paste",
    "100 g icing sugar",
    "680 g cream cheese",
  ],
};
console.log(recipeBakedLemonCheesecake.title);
console.log(`Serves:${recipeBakedLemonCheesecake.Serves}`);
console.log("Ingredients:");
for (item of recipeBakedLemonCheesecake.Ingredients) {
  console.log(item);
}

let recipeMangoYoghurtLayerPots = {
  title: "Mango & yoghurt layer pots",
  Serves: 2,
  Ingredients: [
    "1 ripe mango",
    "1 teaspoon vanilla extract",
    "180 g natural yoghurt",
    "100 g Granola Dust",
  ],
};
console.log(recipeMangoYoghurtLayerPots.title);
console.log(`Serves:${recipeMangoYoghurtLayerPots.Serves}`);
console.log("Ingredients:");
for (item of recipeMangoYoghurtLayerPots.Ingredients) {
  console.log(item);
}
