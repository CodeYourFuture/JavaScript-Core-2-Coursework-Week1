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
const recipe = {
  favoriteRecipe: {
    Title: "Jelly",
    Serves: 3,
    Ingredients: ["hot water", "cold water", "jelly", "sugar"],
  },
  favoriteRecipe2: {
    Title: "Rice",
    Serves: 5,
    Ingredients: ["hot water", "rice", "salt", "pan"],
  },
  favoriteRecipe3: {
    Title: "Tea",
    Serves: 1,
    Ingredients: ["hot water", "tea", "sugar", "mug"],
  },
  favoriteRecipe4: {
    Title: "Pasta",
    Serves: 6,
    Ingredients: ["hot water", "pasta", "salt", "pan", "tomato pure"],
  },
  favoriteRecipe5: {
    Title: "Fruit Salad",
    Serves: 6,
    Ingredients: ["water", "fruits", "sugar", "bowl"],
  },
};

for (let item of Object.entries(recipe)) {
  console.log(item[1]["Title"]);
}
/*
Jelly
Rice
Tea
Pasta
Fruit Salad
*/

for (let item of Object.entries(recipe)) {
  console.log("Serves: " + item[1]["Serves"]);
}
/*
Serves: 3
Serves: 5
Serves: 1
Serves: 6
Serves: 6
*/

console.log("Ingredients:"); // Ingredients:

for (let item of Object.entries(recipe)) {
  let ing = item[1]["Ingredients"]; // first I found the key from the object, but it come inside an array
  ing.forEach((e) => console.log(e)); // to return out of an array, each one in one line need to put it in forEach
}
/*

hot water
cold water
jelly
sugar
hot water
rice
salt
pan
hot water
tea
sugar
mug
hot water
pasta
salt
pan
tomato pure
water
fruits
sugar
bowl
*/
