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
  title: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};
const recipe2 = {
  title: "Plov",
  serves: 4,
  ingredients: ["Rice", "Lamb", "Carrots", "Onion", "Chick peas"],
};
const recipe3 = {
  title: "Manti",
  serves: 1,
  ingredients: ["Beef", "Potato", "Flour", "Pepper"],
};
const recipe4 = {
  title: "Fish & Chips",
  serves: 2,
  ingredients: ["Haddock", "Batter", "Potato", "Garlic & Herbs sauce"],
};
const recipe5 = {
  title: "Cake",
  serves: 2,
  ingredients: ["Flour", "Sugar", "Milk", "Chocolate", "Butter"],
};

const recipes = [recipe1, recipe2, recipe3, recipe4, recipe5];

recipes.forEach((e, i) => {
  console.log(`%c#${i}. Recipe for: ${e.title}`, "color: red; font-weight: 800; font-size: 1.5rem");
  console.log(`Serves: ${e.serves} ${e.serves > 1 ? "people" : "person"}`);
  console.log("%cIngredients: ", "color: green; font-weight: 800; font-size: 1.5rem");
  e.ingredients.forEach((ingredient) => console.log(ingredient));
});



// write code here
