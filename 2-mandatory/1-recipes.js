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
const myRecipes = [
  {
    Title: "Pho",
    Serves: 1,
    Ingredients: ["rice noodles", "broth", "beef", "herbs", "limes", "chilies"],
  },
  {
    Title: "Satay",
    Serves: 2,
    Ingredients: [
      "chicken",
      "peanut sauce",
      "chili sauce",
      "shallots",
      "sambal",
      "limes juice",
      "chiles",
    ],
  },
  {
    Title: "Bakso",
    Serves: 2,
    Ingredients: ["mince beef", "flour", "pepper", "eggs", "baking powder"],
  },
  {
    Title: "Nasi Goreng",
    Serves: 1,
    Ingredients: [
      "shrimp paste",
      "chilli",
      "garlic",
      "chicken",
      "kecap manis",
      "onion",
      "cooked cold rice",
    ],
  },
  {
    Title: "Bubur Ayam",
    Serves: 2,
    Ingredients: [
      "rice",
      "chicken",
      "fish sauce",
      "white pepper",
      "green onions",
    ],
  },
];
myRecipes.forEach((recipe) => {
  console.log(`Recipe: ${recipe.Title}`);
  console.log(`Serves: ${recipe.Serves}`);
  console.log("Ingredients:");
  recipe.Ingredients.forEach((ingredient) => {
    console.log(`- ${ingredient}`);
  });
  console.log("\n");
});

// myRecipes.forEach((recipe) => {
//   const key = Object.keys(recipe)[0];
//   console.log(`${key}:`);
//   console.log(`Title: ${recipe[key].Title}`);
//   console.log(`Serves: ${recipe[key].Serves}`);
//   console.log("Ingredients:");
//   recipe[key].Ingredients.forEach((ingredient) => {
//     console.log(`- ${ingredient}`);
//   });
// });
