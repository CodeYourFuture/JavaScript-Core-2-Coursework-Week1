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

// Recipe 1
let recipe1 = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe1.title);
console.log("Serves: " + recipe1.servings);
console.log("Ingredients:");
for (let i = 0; i < recipe1.ingredients.length; i++) {
  console.log(recipe1.ingredients[i]);
}

// Recipe 2
let recipe2 = {
  title: "Pasta Carbonara",
  servings: 4,
  ingredients: ["spaghetti", "eggs", "bacon", "parmesan cheese", "black pepper"]
};

console.log(recipe2.title);
console.log("Serves: " + recipe2.servings);
console.log("Ingredients:");
for (let i = 0; i < recipe2.ingredients.length; i++) {
  console.log(recipe2.ingredients[i]);
}

// Recipe 3
let recipe3 = {
  title: "Chicken Alfredo",
  servings: 6,
  ingredients: ["chicken breast", "butter", "garlic", "heavy cream", "parmesan cheese", "parsley"]
};

console.log(recipe3.title);
console.log("Serves: " + recipe3.servings);
console.log("Ingredients:");
for (let i = 0; i < recipe3.ingredients.length; i++) {
  console.log(recipe3.ingredients[i]);
}

// Recipe 4
let recipe4 = {
  title: "Beef Stroganoff",
  servings: 4,
  ingredients: ["beef sirloin", "onion", "mushrooms", "sour cream", "beef broth", "flour"]
};

console.log(recipe4.title);
console.log("Serves: " + recipe4.servings);
console.log("Ingredients:");
for (let i = 0; i < recipe4.ingredients.length; i++) {
  console.log(recipe4.ingredients[i]);
}

// Recipe 5
let recipe5 = {
  title: "Vegetable Stir-Fry",
  servings: 3,
  ingredients: ["bell peppers", "broccoli", "carrots", "onion", "garlic", "soy sauce"]
};

console.log(recipe5.title);
console.log("Serves: " + recipe5.servings);
console.log("Ingredients:");
for (let i = 0; i < recipe5.ingredients.length; i++) {
  console.log(recipe5.ingredients[i]);
}
