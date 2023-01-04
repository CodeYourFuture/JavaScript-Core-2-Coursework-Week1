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
console.log("\ ")
// Recipe 1 Borshch
let recipe1 = {
  title: "Borsch",
  servings: 75,
  ingredients: [
    "Cabbage -5kg",
    "Potato -5kg",
    "Carrot -3kg",
    "Onion -1kg",
    "Beetroot -1kg",
    "Bean-2kg",
    "Tomatoes-2kg",
    "Vegetable oil - 200g",
  ]
};
console.log("Recipe 1", " ", recipe1.title);
console.log("Servings: ", recipe1.servings);
console.log("Ingredients:", "\n", recipe1.ingredients.join("\n"));
  console.log(`\ `);

// Recipe 2 Pasta
let recipe2 = {
  title: "Pasta",
  servings: 2,
  ingredients: ["Pasta -300g", "Butter -20g","Water -1000g"]
};
console.log("Recipe 2", " ", recipe2.title);
console.log("Servings: ", recipe2.servings);
console.log("Ingredients:", "\n", recipe2.ingredients.join("\n"));
 console.log(`\ `);

// Recipe 3  Cake Kyiv
let recipe3 = {
  title: "Cake Kyiv",
  servings: 5,
  ingredients: ["Nuts-100g", "Eggs-3", "Butter-20g", "Flour-500g", "Sugar-10g", "Milk-200g"],
};
console.log("Recipe 3", " ", recipe3.title);
console.log("Servings: ",recipe3.servings);
console.log("Ingredients:", "\n", recipe3.ingredients.join("\n"));
 console.log(`\ `);

 // Recipe 4 Potato
 let recipe4 = {
   title: "Potato",
   servings: 15,
   ingredients: ["Potato -5kg", "Butter -500g", "Water -10l"]
 };
 console.log("Recipe 4", " ", recipe4.title);
 console.log("Servings: ", recipe4.servings);
 console.log("Ingredients:", "\n", recipe4.ingredients.join("\n"));
 console.log(`\ `);

 // Recipe 5
 let recipe5 = {
   title: "Latte",
   servings: 75,
   ingredients: ["Coffee -10kg", "Milk -5kg", "Water -10l"]
 };
 console.log("Recipe 5", " ", recipe5.title);
 console.log("Servings: ", recipe5.servings);
 console.log("Ingredients:", "\n", recipe5.ingredients.join("\n"));
 console.log(`\ `);
