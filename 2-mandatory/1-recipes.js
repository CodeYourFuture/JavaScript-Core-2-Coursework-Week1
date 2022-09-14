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

let recipeOne = {
    title: "Hot Chocolate",
    servings: 3,
    ingredients: ["Milk", "Cocoa Powder", "Sugar"]
  };

  console.log(recipeOne.title);
  console.log(`Serves: ${recipeOne.servings}`);
  console.log("Ingredients:");
  recipeOne.ingredients.forEach((ingredient) =>
  console.log(ingredient));

  let recipeTwo = {
  title: "Chocolate Brownies",
    servings: 12,
    ingredients: ["Eggs", "Caster Sugar", "Plain Flour", "Butter", "Chocolate Spread"]
  };

   console.log(recipeTwo.title);
   console.log(`Serves: ${recipeTwo.servings}`);
   console.log("Ingredients:");
   recipeTwo.ingredients.forEach((ingredient) => console.log(ingredient));

  let recipeThree = {
    title: "Tuna Sandwich",
    servings: 4,
    ingredients: ["Tuna", "White Bread", "Mayonnaise", "Tomato" ]
  };

   console.log(recipeThree.title);
   console.log(`Serves: ${recipeThree.servings}`);
   console.log("Ingredients:");
   recipeThree.ingredients.forEach((ingredient) => console.log(ingredient));

   let recipeFour = {
     title: "Spaghetti Bolognese",
     servings: 3,
     ingredients: [
       "Spaghetti",
       "Olive Oil",
       "Red Onions",
       "Beef Mince",
       "Peppers"
     ],
   };

    console.log(recipeFour.title);
    console.log(`Serves: ${recipeFour.servings}`);
    console.log("Ingredients:");
    recipeFour.ingredients.forEach((ingredient) => console.log(ingredient));
    
    let recipeFive = {
      title: "Lasagne",
      servings: 6,
      ingredients: [
        "Onions",
        "Beef Mince",
        "Tomato Puree",
        "Mozzarella",
        "Parmesan",
      ],
    };

    console.log(recipeFive.title);
    console.log(`Serves: ${recipeFive.servings}`);
    console.log("Ingredients:");
    recipeFive.ingredients.forEach((ingredient) => console.log(ingredient));

  




  
 

