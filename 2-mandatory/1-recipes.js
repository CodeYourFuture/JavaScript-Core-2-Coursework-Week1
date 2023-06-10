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

let Recipe1 = {
  Title: "Pizza",
  Servings: "Serves: " + 4,
  ingredients: ["Ingredients: ", "Flour", "Water", "Tomato Puree", "Cheese", "Pepperoni" ],
  };

console.log(Recipe1.Title);
console.log(Recipe1.Servings);
console.log(Recipe1.ingredients.join("\n"));

let Recipe2 = {
  Title: "Hamburger",
  Servings: "Serves: " + 1,
  ingredients: ["Ingredients: ", "Bread baps", "Beef Patty", "Lettuce", "Tomato", "Cheese", "Spicy sauce"],
  };


console.log(Recipe2.Title);
console.log(Recipe2.Servings);
console.log(Recipe2.ingredients.join("\n"));


let Recipe3 = {
  Title: "Jerk Chicken and rice",
  Servings: "Serves: " + 2,
  ingredients: ["Ingredients: ", "4 Chicken thighs", "Jerk Seasoning", "Rice", "Red Beans", "coconut butter", "Spices"],
  };


console.log(Recipe3.Title);
console.log(Recipe3.Servings);
console.log(Recipe3.ingredients.join("\n"));


let Recipe4 = {
  Title: "Pasta bake",
  Servings: "Serves: " + 4,
  ingredients: ["Ingredients: ", "Chopped chicken breast", "chicken Seasoning", "pasta", "pasta sauce", "chopped vegetables", "cheese"],
  };


console.log(Recipe4.Title);
console.log(Recipe4.Servings);
console.log(Recipe4.ingredients.join("\n"));


let Recipe5 = {
  Title: "Flapjacks",
  Servings: "Serves: " + 6,
  ingredients: ["Ingredients: ", "Oats", "Raisins", "currants", "syrup", "butter", "flour"],
  };


console.log(Recipe5.Title);
console.log(Recipe5.Servings);
console.log(Recipe5.ingredients.join("\n"));