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

// Recipe 1:

let cakeRecipe = {
  Title: "Vanilla Cake",
  Serves: 6,
  Ingredients: ["2 Eggs", "Flour", "Vanilla"]
}


console.log(cakeRecipe.Title);
console.log(`Serves: ${cakeRecipe.Serves}`);
console.log(`Ingredients:`);
cakeRecipe.Ingredients 
      .forEach(value => console.log(value));

// Recipe 2:

let muffinRecipe = {
  Title: "Muffin",
  Serves: 4,
  Ingredients: ["1 Eggs", "Flour", "Raisins"]
}


console.log(muffinRecipe.Title);
console.log(`Serves: ${muffinRecipe.Serves}`);
console.log(`Ingredients:`);
muffinRecipe.Ingredients 
      .forEach(value => console.log(value));

// Recipe 3:

let noodleRecipe = {
  Title: "Noodles",
  Serves: 2,
  Ingredients: ["Egg Noodles", "Sesame oil", "Stir fry vegetables"]
}


console.log(noodleRecipe.Title);
console.log(`Serves: ${noodleRecipe.Serves}`);
console.log(`Ingredients:`);
noodleRecipe.Ingredients 
      .forEach(value => console.log(value));

// Recipe 4:

let pickleRecipe = {
  Title: "Pickles",
  Serves: 10,
  Ingredients: ["Gherkins", "Vinegar", "Chili"]
}


console.log(pickleRecipe.Title);
console.log(`Serves: ${pickleRecipe.Serves}`);
console.log(`Ingredients:`);
pickleRecipe.Ingredients 
      .forEach(value => console.log(value));

// Recipe 5: 

let biryaniRecipe = {
  Title: "Biryani",
  Serves: 5,
  Ingredients: ["White rice", "Oil", "Water"]
}


console.log(biryaniRecipe.Title);
console.log(`Serves: ${biryaniRecipe.Serves}`);
console.log(`Ingredients:`);
biryaniRecipe.Ingredients 
      .forEach(value => console.log(value));