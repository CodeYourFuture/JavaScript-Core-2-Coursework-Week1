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

let favRecipe1 = {
  title: "Scrambled Eggs",
  Serves: 1,
  Ingredients: ["Eggs", "Oil", "Salt"]
};

let favRecipe2 = {
  title: "Peanut Butter and Jam Sandwich",
  Serves: 1,
  Ingredients: ["2 Slices of Bread", "Peanut Butter", "Strawberry Jam"]
};

let favRecipe3 = {
  title: "Pizza",
  Serves: 1,
  Ingredients: ["Pizza Dough", "Tomato Sauce", "Ham", "Cheese", "Pineapple"]
};

let favRecipe4 = {
  title: "Chicken Wings",
  Serves: 1,
  Ingredients: ["Chicken Wings", "Oil", "Salt", "Chicken Wings Sauce"]
};

let favRecipe5 = {
  title: "Noodles",
  Serves: 1,
  Ingredients: ["Eggs", "Oil", "Soy Sauce", "Beef Stock Cube", "Noodles", "Water"]
};

console.log(favRecipe1.title);
console.log(`Serves: ${favRecipe1.Serves}`);
for (index in favRecipe1.Ingredients){
  console.log(favRecipe1.Ingredients[index]);
}

console.log();
console.log(favRecipe2.title);
console.log(`Serves: ${favRecipe2.Serves}`);
for (index in favRecipe2.Ingredients){
  console.log(favRecipe2.Ingredients[index]);
}

console.log();
console.log(favRecipe3.title);
console.log(`Serves: ${favRecipe3.Serves}`);
for (index in favRecipe3.Ingredients){
  console.log(favRecipe3.Ingredients[index]);
}

console.log();
console.log(favRecipe4.title);
console.log(`Serves: ${favRecipe4.Serves}`);
for (index in favRecipe4.Ingredients){
  console.log(favRecipe4.Ingredients[index]);
}
 
console.log();
console.log(favRecipe5.title);
console.log(`Serves: ${favRecipe5.Serves}`);
for (index in favRecipe5.Ingredients){
  console.log(favRecipe5.Ingredients[index]);
}
 