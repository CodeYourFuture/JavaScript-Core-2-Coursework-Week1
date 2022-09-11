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
  Pancakes:{
    title: "Pancakes",
    serves: 4,
    Ingredients: ["Eggs", "Flour", "Milk", "Butter"] 
  },
  LemonCake:{
    title: "Lemon Cake",
    serves: 8,
    Ingredients: ["Eggs", "Flour",  "Butter", "Sugar", "Lemons"] 
  },
  Oats:{
    title: "Overnight Oats",
    serves: 4,
    Ingredients: ["Oats", "Apple", "Raisins", "Honey", "Yoghurt", "Milk"] 
  },
  Fritatta:{
    title: "Fritatta",
    serves: 6,
    Ingredients: ["Eggs", "Chicken", "Chorizo", "Vegetables"]
  },
  Soup:{
    title: "Soup",
    serves: 8,
    Ingredients: ["Onions", "Vegetables", "Chicken", "Stock"]

  }

  
};

console.log(recipe.Pancakes.title)
console.log(`Serves: ${recipe.Pancakes.serves}`)
console.log(`Ingredients:`)
console.log(recipe.Pancakes.Ingredients[0])
console.log(recipe.Pancakes.Ingredients[1])
console.log(recipe.Pancakes.Ingredients[2])
console.log(recipe.Pancakes.Ingredients[3]);

console.log(recipe.LemonCake.title)
console.log(`Serves: ${recipe.LemonCake.serves}`)
console.log(`Ingredients:`)
console.log(recipe.LemonCake.Ingredients[0])
console.log(recipe.LemonCake.Ingredients[1])
console.log(recipe.LemonCake.Ingredients[2])
console.log(recipe.LemonCake.Ingredients[3])
console.log(recipe.LemonCake.Ingredients[4]);


console.log(recipe.Oats.title)
console.log(`Serves: ${recipe.Oats.serves}`)
console.log(`Ingredients:`)
console.log(recipe.Oats.Ingredients[0])
console.log(recipe.Oats.Ingredients[1])
console.log(recipe.Oats.Ingredients[2])
console.log(recipe.Oats.Ingredients[3])
console.log(recipe.Oats.Ingredients[4])
console.log(recipe.Oats.Ingredients[5]);

console.log(recipe.Fritatta.title)
console.log(`Serves: ${recipe.Fritatta.serves}`)
console.log(`Ingredients:`)
console.log(recipe.Fritatta.Ingredients[0])
console.log(recipe.Fritatta.Ingredients[1])
console.log(recipe.Fritatta.Ingredients[2])
console.log(recipe.Fritatta.Ingredients[3]);

console.log(recipe.Soup.title)
console.log(`Serves: ${recipe.Soup.serves}`)
console.log(`Ingredients:`)
console.log(recipe.Soup.Ingredients[0])
console.log(recipe.Soup.Ingredients[1])
console.log(recipe.Soup.Ingredients[2])
console.log(recipe.Soup.Ingredients[3]);
