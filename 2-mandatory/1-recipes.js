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
const recipe1 = {
  title: "Long Island Iced Tea",
  servings: 4,
  ingredients: [
    "vodka",
    "gin",
    "tequila",
    "rum",
    "triple sec",
    "lime juice",
    "ice",
    "cola",
  ],
};

const recipe2 = {
  title: "Old Fashion",
  servings: 1,
  ingredients: ["sugar", "Angostura bitters", "water", "whiskey"],
};

const recipe3 = {
  title: "Cosmopolitan",
  servings: 3,
  ingredients: ["vodka", "Cointreau", "lime juice", "cranberry juice"],
};

const recipe4 = {
  title: "Espresso Martini",
  servings: 6,
  ingredients: [
    "vodka",
    "coffee liqueur",
    "shot of espresso",
    "sugar syrup",
    "coffee bean",
  ],
};

const recipe5 = {
  title: "Margarita",
  servings: 10,
  ingredients: [
    "tequilla",
    "orange liqueur",
    "lime juice",
    "agave syrup",
    "lime",
    "kosher salt",
  ],
};

function printRecipe(recipe) {
  console.log(recipe.title);
  console.log(`serves: ${recipe.servings}`);
  console.log("Ingredients:");
  recipe.ingredients.map((ingredient) => console.log(ingredient));
  console.log("");
}

printRecipe(recipe1);

printRecipe(recipe2);

printRecipe(recipe3);

printRecipe(recipe4);

printRecipe(recipe5);
