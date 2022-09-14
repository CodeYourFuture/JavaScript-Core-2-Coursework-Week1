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
  Title: "jollofRice",
  Serves: 4,
  Ingredients: ["rice", "tomato", "onion", "pepper", "spices","meat"]
};

let recipe2 = {
  Title: "egusiSoup",
  Serves: 3,
  Ingredients: ["melon", "onion", "vegetables", "spices", "meat"]
};

let recipe3 = {
  Title: "moimoi",
  Serves: 6,
  Ingredients: ["peas", "crayfish", "onion", "pepper"]
};

let recipe4 = {
  Title: "chinchin",
  Serves: 7,
  Ingredients: ["flour", "milk", "sugar", "water"]
};

let recipe5 = {
  Title: "puffpuff",
  Serves: 3,
  Ingredients: ["flour", "sugar", "salt", "water", "yeast","oil"]
};

const recipees = [recipe1, recipe2, recipe3, recipe4, recipe5];

for (const recipee of recipees){
  console.log(recipee["Title"])
  console.log(`Serves: ${recipee.Serves}`)
  console.log("Ingredients:")
  recipee.Ingredients.forEach(ingredient=>console.log(ingredient))
  console.log(" ");
}
