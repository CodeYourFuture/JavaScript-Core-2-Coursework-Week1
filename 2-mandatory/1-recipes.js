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

class Recipe {
  constructor(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    [this.ingredients] = [ingredients];
  }
  logRecipe() {
    console.log(`${this.title}\nServes: ${this.servings}\nIngredients:`);
    this.ingredients.forEach((x) =>
      console.log(` ${x.charAt(0).toUpperCase().concat(x.slice(1))}`)
    );
  }
}

let recipe1 = new Recipe("Apple Pie", 4, [
  "Apples",
  "Flour",
  "Milk",
  "Cinnamon",
]);

let recipe2 = new Recipe("Pesto Pasta", 4, [
  "pasta",
  "basil",
  "garlic",
  "pine nuts",
  "parmesan cheese",
  "olive oil",
]);

let recipe3 = new Recipe("Chicken Curry", 6, [
  "chicken",
  "onion",
  "garlic",
  "ginger",
  "tomato",
  "curry powder",
  "coconut milk",
]);

let recipe4 = new Recipe("Tomato Soup", 3, [
  "tomato",
  "onion",
  "garlic",
  "vegetable broth",
  "cream",
]);

let recipe5 = new Recipe("Tacos", 5, [
  "ground beef",
  "taco seasoning",
  "lettuce",
  "tomato",
  "cheddar cheese",
  "taco shells",
]);

recipe1.logRecipe();
recipe2.logRecipe();
recipe3.logRecipe();
recipe4.logRecipe();
recipe5.logRecipe();
