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

let recipe = {
  title: "Spicy kimchi pancake",
  servings: 4,
  ingredients: [
    `1 tbsp cornflour`,
    `200g vegan fermented`,
    `2 tsp gochujang`,
    `2 spring onions`,
    `6 tbsp vegetable oil`,
  ],
  printRecipe: function () {
    console.log(this.title);
    console.log(this.servings);
    for (const ingredient of this.ingredients) {
      console.log(ingredient);
    }
  },
};
recipe.printRecipe();
console.log(`---------------------`);
recipe.title = `Chicken fajitas`;
recipe.servings = 3;
recipe.ingredients = [`8 tortillas`, `mixed salad`, `230g fresh salsa`];
recipe.printRecipe();
console.log(`---------------------`);
recipe.title = `Vegetarian chilli`;
recipe.servings = 5;
recipe.ingredients = [
  `2 tbsp vegetable oil`,
  `2 carrots, finely chopped`,
  `2 celery sticks, finely chopped`,
  `2 onions, finely chopped`,
];
recipe.printRecipe();
console.log(`---------------------`);
recipe.title = `Chicken curry`;
recipe.servings = 2;
recipe.ingredients = [
  `400g can chopped tomatoes`,
  `100g Greek yogurt`,
  `1 small bunch of coriander, leaves chopped`,
  `50g ground almonds`,
  `naan breads or cooked basmati rice, to serve`,
];
recipe.printRecipe();
console.log(`---------------------`);
recipe.title = `Easy pancakes`;
recipe.servings = 4;
recipe.ingredients = [
  `100g plain flour`,
  `2 large eggs`,
  `300ml milk`,
  `1 tbsp sunflower`,
];
recipe.printRecipe();
