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

let defoDabo = {
  Serves: 50,
  Ingredients: ["flour", "water", "yeast", "sugar", "salt"],
};

console.log("defoDabo");
console.log(`Serves: ${defoDabo.Serves}`);

defoDabo.Ingredients.forEach((element) => {
  console.log(element);
});

let shiro = {
  Serves: 5,
  Ingredients: ["shiro powder", "onion", "tomatoes", "garlic", "oil"],
};

console.log("\n", "shiro");
console.log(`Serves: ${shiro.Serves}`);

shiro.Ingredients.forEach((element) => {
  console.log(element);
});

let cesarSalad = {
  Serves: 2,
  Ingredients: ["salad", "tomatoes", "onion", "chicken", "croutons", "chilly"],
};

console.log("\n", "cesarSalad");

console.log(`Serves: ${cesarSalad.Serves}`);

cesarSalad.Ingredients.forEach((element) => {
  console.log(element);
});

let icedCoffee = {
  Serves: 5,
  Ingredients: ["coffee", "sugar", "milk", "ice cubes"],
};

console.log("\n", "icedCoffee");

console.log(`Serves: ${icedCoffee.Serves}`);

icedCoffee.Ingredients.forEach((element) => {
  console.log(element);
});

let enkulalFirfir = {
  Serves: 2,
  Ingredients: ["eggs", "onion", "tomatoes", "oil"],
};

console.log("\n", "enkulalFirfir");

console.log(`Serves: ${enkulalFirfir.Serves}`);

enkulalFirfir.Ingredients.forEach((element) => {
  console.log(element);
});
