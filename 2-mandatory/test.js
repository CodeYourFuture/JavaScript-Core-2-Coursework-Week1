let pantry = {
  fridgeContents: ["butter", "milk"],
  cupboardContents: ["salt", "tinned tomatoes", "oregano"],
};

console.log(pantry.fridgeContents.includes("butter"));
let recipe = {
  name: "Pasta",
  ingredients: [
    "pasta",
    "butter",
    "tomatopast",
    "Melon",
    "milk",
    "salt",
    "Mint",
  ],
};
// for (let ingredient of recipe.ingredients) {
//   console.log(pantry.fridgeContents.includes(ingredient));
// }
function createShoppingList(recipe) {
  let final = new Object();
  let result = [];
  for (ingredient of recipe.ingredients) {
    if (
      !pantry.fridgeContents.includes(ingredient) &&
      !pantry.cupboardContents.includes(ingredient)
    ) {
      result.push(ingredient);
    }
  }
  final["Name"] = recipe.name;
  final["ingredients"] = result;
  return final;
}

console.log(createShoppingList(recipe));
