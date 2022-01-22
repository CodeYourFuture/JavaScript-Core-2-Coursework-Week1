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
let recipes = {
  carbonara: {
    title: "Carbonara",
    serves: 2,
    ingredients: ["Spaghetti", "Guanciale", "Egg", "Cheese"],
  },
  pizza: {
    title: "Pizza",
    serves: 1,
    ingredients: [
      "Flour",
      "Salt",
      "Olive oil",
      "Mozzarella",
      "Passata",
      "Parmesan",
    ],
  },
  tiramisu: {
    title: "Tiramisu",
    serves: 3,
    ingredients: ["Mascarpone", "Egg", "Savoiardi", "Sugar", "Caffè"],
  },
  amatriciana: {
    title: "Amatriciana",
    serves: 2,
    ingredients: [
      "Spaghetti",
      "passata",
      "Guanciale",
      "Cheese",
      "Salt",
      "Oil",
      "White wine",
    ],
  },
  steakBroccoli: {
    title: "Steak and Broccoli",
    serves: 2,
    ingredients: [
      "Wholegrain",
      "Chopped sushi ginger",
      "Spring onions",
      "Broccoli",
      "Fillet steak",
    ],
  },
};
for (let recipe in recipes){
  console.log(recipes[recipe].title);
  console.log("Serves: " + recipes[recipe].serves);
  console.log("Ingredients:");
  recipes[recipe].ingredients.forEach(element => {console.log(element)    
  });
  console.log("\n");
}
