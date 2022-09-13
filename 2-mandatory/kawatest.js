let recipe1 = {
    name: "pancakes",
    ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"],
  };
  
let pantry = {
  fridgeContents: ["butter", "milk"],
  cupboardContents: ["salt", "tinned tomatoes", "oregano"],
};

function createShoppingList(recipe) {
  // write code here
   let myShoppingList={};
    myShoppingList["name"]=recipe.name;
    myShoppingList["items"]=[];
    for (let elem of recipe.ingredients){
      if (pantry.cupboardContents.includes(elem)===false  &&
         pantry.fridgeContents.includes(elem)===false ){
          myShoppingList["items"].push(elem)
         }
    }
  return myShoppingList
}

console.log(createShoppingList(recipe1))