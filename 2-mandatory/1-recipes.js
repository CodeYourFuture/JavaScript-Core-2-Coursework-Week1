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

let myRecipes = {
  cheesecake: {
    title: "Strawberry cheesecake",
    servings: 4,
    ingredients: ["flour", "eggs", "cheese", "sugar", "strawberries"],
  },
  spaghetti: {
    title: "Spaghetti",
    servings: 2,
    ingredients: ["pasta", "minced meat", "tomatoes", "basil"],
  },
  sushi: {
    title: "Sushi",
    servings: 3,
    ingredients: ["rice", "avocado", "salmon", "seaweed"],
  },
  toasts: {
    title: "Toasties with mozzarella and basil",
    servings: 2,
    ingredients: ["toast bread", "basil", "tomatoes", "mozzarella"],
  },
  porridge: {
    title: "Breakfast porridge",
    servings: 1,
    ingredients: ["milk", "porridge", "fresh fruits or nuts"],
  },
};

for (let recipe in myRecipes) {
  console.log(myRecipes[recipe].title);
  console.log("Serves: " + myRecipes[recipe].servings);
  console.log("Ingredients: ");
  console.log(myRecipes[recipe].ingredients.join("\b\n"));
}
