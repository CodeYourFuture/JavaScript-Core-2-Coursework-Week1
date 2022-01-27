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

let favoriteRecipe = {
  Title: "Jelly",
  Serves: 3,
  Ingredients: ["hot water", "cold water", "jelly", "sugar"],
};

console.log(favoriteRecipe.Title);
console.log(`Serves: ${favoriteRecipe.Serves}`);
console.log("Ingredients:");
let ingred = favoriteRecipe.Ingredients;
ingred.forEach((e) => console.log(e));

/*
Jelly
Serves: 3
Ingredients:
hot water
cold water
jelly
sugar
*/

let favoriteRecipe2 = {
  Title: "Rice",
  Serves: 5,
  Ingredients: ["hot water", "rice", "salt", "pan"],
};

console.log(favoriteRecipe2.Title);
console.log(`Serves: ${favoriteRecipe2.Serves}`);
console.log("Ingredients:");
let ingred2 = favoriteRecipe2.Ingredients;
ingred2.forEach((e) => console.log(e));

/*
Rice
Serves: 5
Ingredients:
hot water
rice
salt
pan
*/

let favoriteRecipe3 = {
  Title: "Tea",
  Serves: 1,
  Ingredients: ["hot water", "tea", "sugar", "mug"],
};

console.log(favoriteRecipe3.Title);
console.log(`Serves: ${favoriteRecipe3.Serves}`);
console.log("Ingredients:");
let ingred3 = favoriteRecipe3.Ingredients;
ingred3.forEach((e) => console.log(e));

/*
Tea
Serves: 1
Ingredients:
hot water
tea
sugar
mug
*/

let favoriteRecipe4 = {
  Title: "Pasta",
  Serves: 6,
  Ingredients: ["hot water", "pasta", "salt", "pan", "tomato pure"],
};

console.log(favoriteRecipe4.Title);
console.log(`Serves: ${favoriteRecipe4.Serves}`);
console.log("Ingredients:");
let ingred4 = favoriteRecipe4.Ingredients;
ingred4.forEach((e) => console.log(e));

/*
Pasta
Serves: 6
Ingredients:
hot water
pasta
salt
pan
tomato pure
*/

let favoriteRecipe5 = {
  Title: "Fruit Salad",
  Serves: 6,
  Ingredients: ["water", "fruits", "sugar", "bowl"],
};

console.log(favoriteRecipe5.Title);
console.log(`Serves: ${favoriteRecipe5.Serves}`);
console.log("Ingredients:");
let ingred5 = favoriteRecipe5.Ingredients;
ingred5.forEach((e) => console.log(e));

/*
Fruit Salad
Serves: 6
Ingredients:
water
fruits
sugar
bowl
*/
