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

const recipes = [
  {
    title: "Lasagna",
    serves: 6,
    ingredients: ["dough", "cheese", "pepperoni"],
  },
  {
    title: "Soup",
    serves: 4,
    ingredients: ["leeks", "broccoli", "blue cheese"],
  },
  {
    title: "Tuna Pasta",
    serves: 2,
    ingredients: ["penne", "tuna", "onions", "olives"],
  },
  {
    title: "Risotto",
    serves: 4,
    ingredients: ["rice", "parmesan", "sundried tomatoes"],
  },
  {
    title: "Mole",
    serves: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
];

recipes.forEach((recipe) => {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.serves}`);
  console.log("Ingredients:");
  recipe.ingredients.forEach((ingredient) => {
    console.log(ingredient);
  });
});
