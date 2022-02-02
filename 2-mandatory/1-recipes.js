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

let myRecipes = [
  {
    title: "Mousakka",
    serves: 4,
    Ingredients: ["Aubergine", "Beef Mince", "Tomatoes", "Green Peppers", "Onions", "Olive Oil", "Herbs"]
  },
  {
    title: "Pilau Rice",
    serves: 4,
    Ingredients: ["Rice", "Water", "Chicken Stock", "Butter", "Salt", "Black Pepper"]
  },
  {
    title: "Tzatziki",
    serves: 4,
    Ingredients: ["Yogurt", "Cucumber", "Dill", "Garlic", "Salt", "Olive Oil"]
  },
  {
    title: "Rice Pudding",
    serves: 6,
    Ingredients: ["Rice", "Milk", "Sugar", "Butter", "Cinnamon",]
  },
  {
    title: "Fruit Plate",
    serves: 4,
    Ingredients: ["Apple", "Banana", "Walnuts", "Oranges", "Almonds"]
  }
]

myRecipes.forEach((each) => {
  console.log("* " + each.title + " *")
  console.log('Serves: ' + each.serves)
  console.log("Ingredients:");
  each.Ingredients.forEach((ingredient) => console.log(ingredient))
  console.log(" ")});