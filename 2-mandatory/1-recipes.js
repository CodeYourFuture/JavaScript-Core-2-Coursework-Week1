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

const myFavouriteReceipe1 = {
  title: "Tom Yung Goong",
  servings: 4,
  ingredients: [
    "960 ml shrimp stock",
    "12 medium sized shrimp",
    "1 stalk lemongrass",
    "6 makrut lime leaves",
    "7 - 8 slices galangal",
    "2 - 5 Thai chilies",
    "720 ml oyster mushroom",
    "60 ml Thai chili paste",
    "45 ml fish sauce",
    "120 ml fresh lime juice",
    "5 ml sugar",
    "Coriander"],
};

console.log(myFavouriteReceipe1.title);
console.log(`Serves : ${myFavouriteReceipe1.servings}`);
console.log("Ingredients:");
myFavouriteReceipe1.ingredients.forEach(element => console.log(element));

// Tom Yung Goong
// Serves: 4
// Ingredients:
// 960 ml shrimp stock
// 12 medium sized shrimp
// 1 stalk lemongrass
// 6 makrut lime leaves
// 7 - 8 slices galangal
// 2 - 5 Thai chilies
// 720 ml oyster mushroom
// 60 ml Thai chili paste
// 45 ml fish sauce
// 120 ml fresh lime juice
// 5 ml sugar
// Coriander

const myFavouriteReceipe2 = {
  title: "Tuna Nicoise Salad",
  servings: 4,
  ingredients: [
    "450g potatoes",
    "4 eggs",
    "2 x 200g cans tuna steak in springwater",
    "2 tomatoes",
    "120g green beans",
    "100g baby spinach",
    "100g black olives",
    "1 1 / 2 tbsp lemon juice",
    "4 tbsp extra virgin olive oil",
    "1 small garlic clove, minced / grated",
    "1 / 4 tsp salt",
    "1 tsp Dijon mustard",
    "Pinch black pepper"
  ],
};

console.log(myFavouriteReceipe2.title);
console.log(`Serves : ${myFavouriteReceipe2.servings}`);
console.log("Ingredients:");
myFavouriteReceipe2.ingredients.forEach(element => console.log(element));
// Tuna Nicoise Salad
// Serves: 4
// Ingredients:
// 450g potatoes
// 4 eggs
// 2 x 200g cans tuna steak in springwater
// 2 tomatoes
// 120g green beans
// 100g baby spinach
// 100g black olives
// 1 1 / 2 tbsp lemon juice
// 4 tbsp extra virgin olive oil
// 1 small garlic clove, minced / grated
// 1 / 4 tsp salt
// 1 tsp Dijon mustard
// Pinch black pepper