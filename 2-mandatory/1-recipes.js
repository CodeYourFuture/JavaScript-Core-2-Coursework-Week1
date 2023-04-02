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
let mole = {
  title: "Mole",
  serves: "2",
  ingredients: ["cinnamon", "cumin", "cocoa"],

}
console.log(mole.title);
console.log(`Serves: ${mole.serves}`);
console.log("Ingredients:")
mole.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});


let pannaCota = {
  title: "Panna Cotta",
  serves: "4",
  cookingTime: " 5 min",
  ingredients: ["milk", "gelatine", "strawberry", "lemon", "sugar", "double cream", "vanilla"],
}
console.log(pannaCotta.title);
console.log(`Serves: ${pannaCotta.serves}`);
console.log("Ingredients:")
pannaCotta.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

let byrek = {
  title: "Byrek",
  serves: "4",
  prepTime="30min",
  cookingTime: "30 min",
  doughIngredients={
    ["water", "flour", "salt"],
  },
  filling=["spinach", "spring onions", "feta", "salt", "olive oil"],

}

console.log(byrek.title);
console.log(`Serves: ${byrek.serves}`);
console.log("Ingredients:")
byrek.doughIngredients.forEach((ingredient) => {
  console.log(ingredient);
});