let recipe1 = {
  name: "pancakes",
  ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"],
};
let pantry = {
  fridgeContents: ["butter", "milk"],
  cupboardContents: ["salt", "tinned tomatoes", "oregano"],
};

function createShoppingList(recipe) {
  const rec = { name: recipe.name, items: [] };
  for (const property in pantry) {
    const arr = Array.from(pantry[property]);
    for (let i = 0; i < arr.length; i++) {
      let see = arr[i];
      if (recipe["ingredients"].includes(arr[i])) {
        rec.items.push(arr[i]);
      }
    }
  }
  return rec;
}
console.log(createShoppingList(recipe1));
