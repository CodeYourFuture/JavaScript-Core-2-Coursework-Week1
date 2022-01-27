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

let recipe1 = {
  Title: "Fig Cake",
  Serving: 8,
  Ingredients: ["Fig", "Walnut", "Flour", "Sugar", "Milk", "Egg"],
};

let recipe2 = {
  Title: "Menemen",
  Serving: 4,
  Ingredients: ["Egg", "Tomato", "Pepper", "Olive Oil", "Salt"],
};

let recipe3 = {
  Title: "Chocolate Cookie",
  Serving: 5,
  Ingredients: ["Egg", "Sugar", "Butter", "Hazelnut", "Flour"],
};

let recipe4 = {
  Title: "Red Lentil Soup",
  Serving: 6,
  Ingredients: ["Red Lentil", "Salt", "Olive Oil", "Carrot", "Potato", "Onion"],
};

let recipe5 = {
  Title: "Rice",
  Serving: 3,
  Ingredients: ["Rice", "Salt", "Butter", "Olive Oil", "Water"],
};

let recipes = [recipe1, recipe2, recipe3, recipe4, recipe5];

recipes.forEach((recipe) => {
  Object.values(recipe).forEach((value, index) => {
    if (index === 0) {
      console.log(value);
    }
    if (index === 1) {
      console.log("Serves:" + value);
    }
    if (index === 2) {
      console.log("Ingredients: ");
      value.forEach((ingredient) => {
        console.log(ingredient);
      });
    }
  });
});
