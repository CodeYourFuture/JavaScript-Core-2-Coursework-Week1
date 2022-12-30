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

let dish1 = {
  what: "cockTail",
  title: "sunsetBeach",
  serves: 1,
  ingredients: [
    "Rum",
    "Cream of coconut (not coconut cream)",
    "Pineapple juice",
    "Ice",
    "Frozen pineapple",
    "Lime juice",
  ],
  method:
    "Blend pineapple and ice until chunky.\n   Add the remaining ingredients and blend until smooth.\n Serve garnished with a cocktail cherry",

  highAlcoholicContent: true,
  bitter: false,
  highCarb: false,
  highFat: false,
  tastyRating: 10,
};

let dish2 = {
  what: "starter",
  title: "vegetableSoup",
  prepTime: "10 mins",
  cookingTime: "30 mins",
  serves: 2,
  ingredients: [
    "freshsly chopped vegetables of choice",
    "black pepper",
    "cream",
    "vegetable stock",
    "salt to taste",
    "coriander bunch",
  ],
  vegTypes: [
    "carrots",
    "peas",
    "broccoli",
    "sweet red peppers",
    "sweetcorn",
    "onions",
  ],
  method:
    "1.Steam all vegetables for 15 minutes.\n 2.Blend with a hand blender on low. Pour out and let to cool.\n  3.Add cream, black pepper and salt to taste.\n  4.Stir gently until thoroughly mixed.\n  5.Serve with a sprig of coriander and enjoy",
  highCarb: false,
  highFat: false,
  tastyRating: 10,
};

let dish3 = {
  what: "Main Dish",
  title: "coconut Rice",
  serves: 4,
  prepTime: "30 minutes",
  cookingTime: " one hour",
  ingredients: [
    "rice x3cups",
    "coconut Milk",
    "salt",
    "veg Stock",
    "water",
    "olive Oil",
  ],
  highCarb: true,
  highFat: false,
  tastyRating: 8,
};

let dish4 = {
  what: "side dish",
  title: "potatoSalad",
  serves: 4,
  ingredients: [
    "6 large boiled potatoes",
    "cheese",
    "spring Onions",
    "boiled Eggs",
    "rock salt",
    "organic mayonnaise",
    "Mint sprigs",
  ],
  cheeseTypes: [
    "edam",
    "chedder",
    "mascarpone",
    "manchego",
    "mozzarella",
    "parmesan",
  ],
  prepTime: "20 minutes",
  cookTime: "10 minutes",
  method: [
    " 1. cut potatoes into cubes.",
    "2. chop up the onions and boiled eggs, grate cheese of choice.",
    "3. Add mayonnaise and salt. Toss together properly.",
    "4. Serve with a sprig of mint.",
    "5. Enjoy.",
  ],

  highCarb: false,
  highFat: false,
  tastyRating: 10,
};

let dish5 = {
  what: "Desert",
  title: "cheesy Crumbs",
  serves: 6,
  ingredients: [
    "cheese of your choice",
    "disgestive biscuits",
    "cracker biscuits",
    "mild unsalted butter",
    "heavy cream",
  ],
  prepTime: "10 minutes",
  cookTime: "15 - 20 minutes",
  method: [
    "1. Break biscuits and form crumbs with butter and heavy cream. 2. Add to an oven pan. 3. Sprinkle cheese of choice. 4.Baked in oven for 15 minutes until cheese browns mildly. 5. Leave to cool and serve.",
  ],
  highCarb: true,
  highFat: true,
  tastyRating: 9,
};
myRecipes = [dish1, dish2, dish3, dish4, dish5];
myRecipes.forEach((itemOfRecipe) => console.log(itemOfRecipe));
console.log(dish1.method);
