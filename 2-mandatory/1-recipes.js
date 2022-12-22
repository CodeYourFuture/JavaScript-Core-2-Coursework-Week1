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

let recipe1 = {
  title: "Broccoli and bacon salad",
  serving: 2,
  ingredients: {
    bacon: "150g",
    broccoli: "800g",
    mayonnaise: "125g (1/2 cup)",
    "fresh lemon juice": "1 tbsp",
    mustard: "2 tsp",
    "red grapes": "200g",
    "green shallots": 2,
    "slivered almonds": "2 tbsp",
  },
};

let recipe2 = {
  title: "Prawn cocktail",
  serving: 4,
  ingredients: {
    prawn: "400 g",
    "Little Gem lettuces": 4,
    mayonnaise: "5 heaped tbsp",
    "tomato chutney": "5 tbsp ",
  },
};
let recipe3 = {
  title: "Pastrami-cured salmon",
  serving: 6,
  ingredients: {
    salmon: "800 g",
    "sea salt": "250 g",
    sugar: "100 g",
    coriander: "2 tbsp",
  },
};

let recipe4 = {
  title: "Roast turkey",
  serving: 8,
  ingredients: {
    turkey: "5-6 kg",
    butter: "150 g",
    "garlic cloves": "3",
    "mixed herbs such as parsley, thyme or bay": "optional",
    lemons: 2,
    onion: 1,
    carrots: 2,
  },
};

let recipe5 = {
  title: "Really simple cranberry sauce",
  serving: 8,
  ingredients: {
    sugar: "100 g",
    "orange juice": "100 ml",
    cranberries: "250 g",
  },
};

myRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5];
myRecipes.forEach((x) => console.log(x));
// console.log(recipe1);
// console.log(recipe2);
// console.log(recipe3);
// console.log(recipe4);
// console.log(recipe5);
