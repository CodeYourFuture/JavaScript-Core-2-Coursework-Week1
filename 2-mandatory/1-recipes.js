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

let recipe1 = {
  title: "burger",
  servings: 1,
  ingredients: ["bun", "ham", "cheese", "ketchup"]
};

let recipe2 = {
  title: "hot dog",
  servings: 1,
  ingredients: ["baguette", "sausage", "ketchup", "mustard"],
};

let recipe3 = {
  title: "salad",
  servings: 2,
  ingredients: ["cabbage", "potato", "cucumber", "mayo"],
};

let recipe4 = {
  title: "pizza",
  servings: 4,
  ingredients: ["pizza dough", "salami", "cheese", "ketchup"],
};

let recipe5 = {
  title: "tea",
  servings: 1,
  ingredients: ["water", "tea", "sugar", "milk"],
};

for (let prop in recipe1) {
  if (Array.isArray(recipe1.prop)) {
    for (let el of prop) {
      console.log(el);
    }
   } else {
      console.log(prop);
    }
}