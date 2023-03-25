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
    title: "Baked chicken breast with spice mix seasoning",
    serves: 2,
    Ingredients: [
      "4 chicken breasts (skinless, if you like)",
      "1½ tbsp light brown soft sugar",
      "1½ tsp paprika",
      "1 tsp dried thyme",
      "1 tsp dried oregano",
      "¼ tsp garlic granules",
      "½ tsp sea salt",
      "potato wedges and green veg, to serve (optional)",
    ]
  };

const recipe2 = {
    title: "Pasta Napolitana",
    serves: 8,
    Ingredients: [
      "8 bacon strips",
      "1 pound ground beef",
      "1 pound bulk Italian sausage",
      "1 tablespoon olive oil",
      "1 large onion, chopped",
      "1 can (6 ounces) tomato paste",
      "1 jar (24 ounces) marinara sauce",
      "1 can (14-1/2 ounces) chicken broth",
      "1 can (8 ounces) mushroom stems and pieces"
    ]
  };

const recipe3 = {
  title: "Balsamic beef stew with veggie mash",
  serves: 4,
  Ingredients: [
    "1 tbsp olive or rapeseed oil",
    "2 large onions, (325g), halved and sliced",
    "600g diced lean stewing beef",
    "2 garlic cloves, chopped",
    "10g dried porcini mushrooms",
    "2 tbsp balsamic vinegar",
    "2 tbsp tomato purée",
    "1 tsp English mustard powder",
    "320g carrots, finely chopped",
    "200g large chestnut mushrooms",
    "4 x 80g portions broccoli"
  ],
};

const recipe4 = {
  title: "Cheddar-Stuffed Burgers with Pickled Slaw and Fried Shallots",
  serves: 4,
  Ingredients: [
    "Kosher salt",
    "8 cups finely shredded green cabbage (from a 1 1/2-pound head)",
    "1 cup distilled white vinegar",
    "1 tablespoon sugar",
    "2 tablespoons yellow mustard seeds",
    "Vegetable oil, for frying",
    "5 large shallots, very thinly sliced crosswise and separated into rings",
    "1/4 cup Wondra flour",
    "1½ pounds ground beef chuck, preferably 85 percent lean",
    "1 teaspoon onion powder",
    "1 teaspoon garlic powder",
    "1 teaspoon sweet smoked paprika",
    "1 tablespoon Worcestershire sauce",
    "Freshly ground pepper",
    "6 ounces extra-sharp cheddar, shredded",
    "2 cups baby arugula",
    "4 brioche buns, split and toasted",
  ],
};

const recipe5 = {
  title: "Chicken stroganoff",
  serves: 4,
  Ingredients: [
    "2 tbsp olive oil",
    "4 skinless chicken breasts",
    "2 onions, finely chopped",
    "4 garlic cloves, crushed",
    "1 tbsp sweet paprika",
    "400ml chicken stock",
    "4 tsp Dijon mustard",
    "2 tbsp Worcestershire sauce",
    "200g soured cream or crème fraiche",
    "a large handful of parsley",
    "chopped rice mash or pasta, to serve"
  ],
};

recipeList = [recipe1, recipe2, recipe3, recipe4, recipe5]

for (let recipe of recipeList) {
  console.log(recipe.title);
  console.log(`Serves:`, recipe.serves);
  console.log("Ingredients:");
  console.log(recipe.Ingredients.forEach((element) => console.log(element))+ "\n");
  }
