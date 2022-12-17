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
const recipe1 = {
  title: "Mole1",
  Serves: 2,
  Ingredients: ["cinnamon1", "cumin1", "cocoa1"],
};
const recipe2 = {
  title: "Mole2",
  Serves: 2,
  Ingredients: ["cinnamon2", "cumin2", "cocoa2"],
};
const recipe3 = {
  title: "Mole3",
  Serves: 2,
  Ingredients: ["cinnamon3", "cumin3", "cocoa3"],
};
const recipe4 = {
  title: "Mole4",
  Serves: 2,
  Ingredients: ["cinnamon4", "cumin4", "cocoa4"],
};
const recipe5 = {
  title: "Mole5",
  Serves: 2,
  Ingredients: ["cinnamon5", "cumin5", "cocoa5"],
};
const recipeArr = [recipe1, recipe2, recipe3, recipe4, recipe5];
for (let i = 0; i < recipeArr.length; i++) {
  for (const property in recipeArr[i]) {
    if (property === "title") {
      console.log(`${recipeArr[i][property]}`);
    } else if (property === "Serves") {
      console.log(`${property}:${recipeArr[i][property]}`);
    } else if (property === "Ingredients") {
      console.log(`${property}:`);
      Array.from(recipeArr[i][property]).forEach((x) => console.log(x));
      console.log(`----------------------`);
    }
  }
}
// Result:
// Mole1
// Serves:2
// Ingredients:
// cinnamon1
// cumin1
// cocoa1
// ----------------------
// Mole2
// Serves:2
// Ingredients:
// cinnamon2
// cumin2
// cocoa2
// ----------------------
// Mole3
// Serves:2
// Ingredients:
// cinnamon3
// cumin3
// cocoa3
// ----------------------
// Mole4
// Serves:2
// Ingredients:
// cinnamon4
// cumin4
// cocoa4
// ----------------------
// Mole5
// Serves:2
// Ingredients:
// cinnamon5
// cumin5
// cocoa5
// ----------------------