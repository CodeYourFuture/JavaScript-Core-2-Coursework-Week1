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
let recipe1 = {
  title: "Pasta",
  servings: 4,
  ingredients: ["Flour","Eggs","Salt","Olive Oil","Water","Tomato"],
  printRecipe: function(){
    console.log(this.title);
    console.log(`Serves: ${this.servings}`);
    console.log("Ingredients")
    for (const ingredient of this.ingredients) {
      console.log(ingredient);
    }
  }
};
let recipe2 = {
  title: "Bacon",
  servings: 4,
  ingredients: ["Bacon", "Eggs", "Salt", "Olive Oil", "Water", "Tomato"],
  printRecipe: function () {
    console.log(this.title);
    console.log(`Serves: ${this.servings}`);
    console.log("Ingredients");
    for (const ingredient of this.ingredients) {
      console.log(ingredient);
    }
  },
};
let recipe3 = {
  title: "Pasta",
  servings: 4,
  ingredients: ["Flour", "Eggs", "Salt", "Olive Oil", "Water", "Tomato"],
  printRecipe: function () {
    console.log(this.title);
    console.log(`Serves: ${this.servings}`);
    console.log("Ingredients");
    for (const ingredient of this.ingredients) {
      console.log(ingredient);
    }
  },
};
let recipe4 = {
  title: "Pasta",
  servings: 4,
  ingredients: ["Flour", "Eggs", "Salt", "Olive Oil", "Water", "Tomato"],
  printRecipe: function () {
    console.log(this.title);
    console.log(`Serves: ${this.servings}`);
    console.log("Ingredients");
    for (const ingredient of this.ingredients) {
      console.log(ingredient);
    }
  },
};
let recipe5 = {
  title: "Pasta",
  servings: 4,
  ingredients: ["Flour", "Eggs", "Salt", "Olive Oil", "Water", "Tomato"],
  printRecipe: function () {
    console.log(this.title);
    console.log(`Serves: ${this.servings}`);
    console.log("Ingredients");
    for (const ingredient of this.ingredients) {
      console.log(ingredient);
    }
  },
};
recipe1.printRecipe();
recipe2.printRecipe();
recipe3.printRecipe();
recipe4.printRecipe();
recipe5.printRecipe();