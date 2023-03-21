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
let recipe1 = {
  x: "bread", 
  cups: 2, 
  isHungry: ["a", "b", "c",],
};
console.log(recipe1.cups);

let recipe2 = {
  x: "butter", 
  cups: 1, 
  isHungry: ["a", "b", "c",],
};
console.log(recipe2.isHungry[2]);

let recipe3 = {
  x: "milk", 
  cups: 4, 
  fruits: ["apple", "banana", "cherry",],
};
console.log(recipe3.x);

let recipe4 = {
  x: "strawberry", 
  teaSpoons: 7, 
  people: ["a", "b", "c",],
};
console.log(recipe4.teaSpoons);

let recipe5 = {
  x: "eggs", 
  cups: 0, 
  when: ["morning", "afternoon", "evening",],
};
console.log(recipe5.when[0]);

// write code here