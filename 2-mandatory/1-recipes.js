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

const veganDessert_1 = {
  title: "Vegan Peanut Butter Cookie Bars",
  servings: 4,
  ingredients: [
    "Creamy Peanut Butter ",
    "Melted Coconut Oil",
    "Maple Syrup",
    "Vanilla Extract",
    "Sea Salt",
    "Almond Flour",
    "Cocoa Powder",
    "Water",
  ]
};

console.log(veganDessert_1.title);
console.log("serves:" + veganDessert_1.servings);
veganDessert_1.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});
  
const veganDessert_2 = {
  title: "Vegan Vanilla Layer Cake",
  servings: 6,
  ingredients: ["Vegan Butter", 
  "Unsweetened Plant-Based Milk", 
  "All-Purpose Flour",
  "Baking Powder",
  "Fine Sea Salt",
  "Sunflower Oil",
  "Cane Sugar",
  "Pure Vanilla Extract",
  "Raspberry Jam"]
}

console.log(veganDessert_2.title);
console.log("serves:" + veganDessert_2.servings);
veganDessert_2.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

const veganDessert_3 = {
  title: "Creamy Vegan Lemon Bars",
  servings: 9,
  ingredients: [
    "Raw Cashews",
    "Coconut Cream",
    "Cornstarch",
    "Lemon Juice",
    "Lemon Zest",
    "Sea Salt",
    "Coconut Sugar",
    "Oats",
    "Raspberry Jam",
    "Coconut Oil",
  ]
};
console.log(veganDessert_3.title);
console.log("serves:" + veganDessert_3.servings);
veganDessert_3.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

const veganDessert_4 = {
  title: "Vegan Walnut Cake",
  servings: 12,
  ingredients: [
    "All-Purpose Flour",
    "Ground Walnuts",
    "Baking Soda",
    "salt",
    "Granulated Sugar",
    "Powdered Sugar",
    "Vegan Butter",
    "Cocoa Powder",
    "Vanilla Extract",
    "Coconut Oil",
    "Dairy Free Milk",
    "Ground Walnuts",
  ]
};
console.log(veganDessert_4.title);
console.log("serves:" + veganDessert_4.servings);
veganDessert_4.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

const veganDessert_5 = {
  title: "Vegan Zucchini Brownies",
  servings: 8,
  ingredients: [
    "Plant-Based Milk",
    "Dairy-Free Chocolate Chips",
    "Baking Soda",
    "salt",
    "Zucchini",
    "Sugar",
    "Baking Powder",
    "Cocoa Powder",
    "Vanilla Extract",
  ]
};
console.log(veganDessert_5.title);
console.log("serves:" + veganDessert_5.servings);
veganDessert_5.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});