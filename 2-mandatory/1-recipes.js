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

function displayRecipes(aRecipe) {
      console.log(aRecipe.title);
      console.log(`Serves: ${aRecipe["serves"]}`);
      console.log("Ingredients:");
      for (ingredient of aRecipe["ingredients"])
              console.log(ingredient);
      console.log("")
}

console.log("");
let recipes = []

recipes.push({  
            title: "Mole", 
            serves: 2,
            ingredients: [ "cinnamon", "cumin", "cocoa"]
});

// https://www.bbcgoodfood.com/recipes/spinach-tuna-pancakes

recipes.push({  
            title: "Spinach & tuna pancakes", 
            serves: 2,
            ingredients: [ "2 large eggs", "250g baby spinach", "120g can tuna steak", "200g cottage cheese"] });

// https://www.bbcgoodfood.com/recipes/jacket-potato-whipped-feta-sumac

recipes.push({  
            title: "Jacket potato with whipped feta & sumac", 
            serves: 1,
            ingredients: [ "1 baking potato", "50g Greek yogurt", "half a teaspoon of sumac", "half a teaspoon of garlic salt"]
});

// https://www.bbcgoodfood.com/recipes/swede-gnocchi-crispy-sage

recipes.push({  
            title: "Swede gnocchi with crispy sage", 
            serves: 4,
            ingredients: [ "400g floury King Edwards potatoes", "600g swede , peeled", "100g '00' flour", "30g parmesan", "100g butter",
                           "small pack sage leaves picked"]
});

// https://www.bbcgoodfood.com/recipes/onepot-chicken-mushroom-risotto

recipes.push({  
            title: "One-pot chicken & mushroom risotto", 
            serves: 4,
            ingredients: [ "250g pack chestnut mushrooms, sliced", "300g risotto rice", "1.5 litre  hot chicken stock",
                            "60g butter", "1 large onion, finely chopped", "50g grated parmesan"]
});

recipes.forEach(displayRecipes);