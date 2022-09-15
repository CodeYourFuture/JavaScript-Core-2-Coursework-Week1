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


let favoriteRecipe = {
  recipe1: {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  recipe2: {
    title: "Pizza Margherita XL",
    servings: 4,
    ingredients: ["strong bread flour", "yeast", "salt", "olive", "tomato"],
  },
  recipe3: {
    title: "Pancake",
    servings: 3,
    ingredients: ["egg", "milk", "flour", "butter", "salt", "baking powder"],
  },
  recipe4: {
    title: "Mango Lassi",
    servings: 2,
    ingredients: ["mango", "plain yogurt", "milk", "honey", "cardamom", "ice"],
  },
  recipe5: {
    title: "Kebab",
    servings: 1,
    ingredients: ["lamb", "tomato", "salt", "lime", "garlic"],
  },
  display: function (recipe) {
    let res = `${this[recipe].title}\nServes: ${this[recipe].servings}\nIngredients:\n`;
    for (let i = 0; i < this[recipe].ingredients.length; i++)
      res += this[recipe].ingredients[i] + "\n";
    return res;
  },
};

for (let i = 1; i < Object.keys(favoriteRecipe).length; i++)
  console.log(favoriteRecipe.display("recipe" + i));
