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
let recipe = {
  title: "Pasta",
  Serves: 4,
  Ingredients:[
    "pasta-sauce",
    "cheese",
    "tomato",
    "pasta flour"
  ]
}
console.log(recipe.title);
console.log(`Serves: ${recipe.Serves}`);
console.log(`Ingredients: 
${recipe.Ingredients['0']}
${recipe.Ingredients['1']}
${recipe.Ingredients['2']}
${recipe.Ingredients['3']}
`);



let recipe1 = {
  title: "omelette",
  Serves: 3,
  Ingredients: [
   "9 eggs",
   "3 tps sunflower oil",
   "3 tps butter",
   "chopped onions",
   "chopped peppers",
   "1 tps chicken stock"
  ]
}
console.log(recipe1.title);
console.log(`Serves: ${recipe1.Serves}`);
console.log(`Ingredients: 
${recipe1.Ingredients[0]} 
${recipe1.Ingredients[1]} 
${recipe1.Ingredients[2]}
${recipe1.Ingredients[3]}
${recipe1.Ingredients[4]}
${recipe1.Ingredients[5]}
`);



let recipe2 = {
  title: "traditional rice",
  Serves: 5,
  Ingredients: [
    "¼ cup vegetable oil(60 mL)",
    "1 medium yellow onion",
    "3 cloves garlic",
    "1 small tomato",
    "1 cinnamon stick",
    "1 tps salt",
    "1 vegetable stock cube",
    "¼ cup fresh cilantro(10 g)",
    "1 tablespoon xawaash",
    "2 cups basmati rice(400 g)",
    "2 ½ cups hot water(600 mL)",
    "1 drop red food coloring mixed with 1 teaspoon of water",
    "3 drops orange food coloring, mixed with 1 teaspoon of water",
    "¼ cup raisin(40 g)"
  ]
}

console.log(recipe2.title);
console.log(`Serves: ${recipe2.Serves}`);
console.log(`Ingredients: 
${recipe2.Ingredients[0]} 
${recipe2.Ingredients[1]} 
${recipe2.Ingredients[2]} 
${recipe2.Ingredients[3]} 
${recipe2.Ingredients[4]} 
${recipe2.Ingredients[5]} 
${recipe2.Ingredients[6]} 
${recipe2.Ingredients[7]} 
${recipe2.Ingredients[8]} 
${recipe2.Ingredients[9]} 
${recipe2.Ingredients[10]} 
${recipe2.Ingredients[11]} 
${recipe2.Ingredients[12]} 
${recipe2.Ingredients[13]}`);

let recipe3 = {
title: "Sticky Chicken Wings",
Serves: 2,
Ingredients: [
"Roscoe's Sweet and Sour Sauce",
"12 chicken wings", 
"1 red or green pepper, sliced"
]
}
console.log(recipe3.title);
console.log(`Serves: ${recipe3.Serves}`);
console.log(`Ingredients: 
${recipe3.Ingredients['0']} 
${recipe3.Ingredients['1']} 
${recipe3.Ingredients['2']}`);


let recipe4 = {
  title: "Tacos",
  Serves: 8,
  Ingredients: [
  "1 tbsp.extra - virgin olive oil",
  "1 medium yellow onion, chopped",
  "3 cloves garlic, minced", 
  "1 lb.ground chicken",
  "1 tsp.chili powder", 
  "1 tsp.cumin",
  "Kosher salt",
  "Freshly ground black pepper",
  "3 c.shredded cheddar, divided",
  "8 small corn tortillas"]
};


console.log(recipe4.title);
console.log(`Serves: ${recipe4.Serves}`);
console.log(`Ingredients: 
${recipe4.Ingredients[0]} 
${recipe4.Ingredients[1]} 
${recipe4.Ingredients[2]} 
${recipe4.Ingredients[3]} 
${recipe4.Ingredients[4]} 
${recipe4.Ingredients[5]} 
${recipe4.Ingredients[6]} 
${recipe4.Ingredients[7]} 
${recipe4.Ingredients[8]} 
${recipe4.Ingredients[9]}`);
