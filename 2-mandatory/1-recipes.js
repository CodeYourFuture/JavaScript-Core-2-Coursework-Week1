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
let recipes =
{
    recipe_1:
    {
        title: "Random Recipe 1",
        servings: 1,
        ingredients: ["Random Ingredient 1", "Random Ingredient 3", "Random Ingredient 4"]
    },

    recipe_2:
    {
        title: "Random Recipe 2",
        servings: 3,
        ingredients: ["Random Ingredient 4", "Random Ingredient 5"]
    },

    recipe_3:
    {
        title: "Random Recipe 3",
        servings: 2,
        ingredients: ["Random Ingredient 3", "Random Ingredient 6", "Random Ingredient 9"]
    },

    recipe_4:
    {
        title: "Random Recipe 4",
        servings: 7,
        ingredients: ["Random Ingredient 2", "Random Ingredient 8", "Random Ingredient 9"]
    },

    recipe_5:
    {
        title: "Mole",
        servings: 2,
        ingredients: ["cinnamon", "cumin", "cocoa"]
    }
}


console.log(recipes.recipe_1.title);
console.log("Servings: " + recipes.recipe_1.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe_1.ingredients.length; i++)
{
    console.log(recipes.recipe_1.ingredients[i]);
}

console.log(recipes.recipe_2.title);
console.log("Servings: " + recipes.recipe_2.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe_2.ingredients.length; i++)
{
    console.log(recipes.recipe_2.ingredients[i]);
}

console.log(recipes.recipe_3.title);
console.log("Servings: " + recipes.recipe_3.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe_3.ingredients.length; i++)
{
    console.log(recipes.recipe_3.ingredients[i]);
}

console.log(recipes.recipe_4.title);
console.log("Servings: " + recipes.recipe_4.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe_4.ingredients.length; i++)
{
    console.log(recipes.recipe_4.ingredients[i]);
}

console.log(recipes.recipe_5.title);
console.log("Servings: " + recipes.recipe_5.servings);
console.log("Ingredients:");
for (let i = 0; i < recipes.recipe_5.ingredients.length; i++)
{
    console.log(recipes.recipe_5.ingredients[i]);
}
