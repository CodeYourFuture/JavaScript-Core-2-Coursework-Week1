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

let favoriteRecipe = {
  ChickenMayoSand: {
    title: "Chicken mayo sand",
    servings: 1,
    ingredients: ["Your favorite bread", "Butter", "Shredded roasted chicken breasts", "Mayo", "lettuce", "Salt & Pepper"],
  },
  fryingPanLasagne: {
    title: "Frying Pan Lasagne",
    servings: 4,
    ingredients: ["2 tsp olive oil", "1 medium red onion, finely chopped", "2 garlic cloves, crushed", "1 medium red capsicum, finely chopped", "2 tsp dried oregano", "410g can crushed tomatoes", "3 fresh lasagne sheets, cut into thirds", "3 fresh lasagne sheets, cut into thirds", "125g light cream cheese", "100g shaved ham", "3/4 cup light tasty cheese, grated"]
  },
  BaconCheesePizzas: {
    title: "Bacon & cheese pizzas",
    servings: 4,
    ingredients: ["2 / 3 cup Old El Paso medium salsa thick 'n chunky", "100 g bacon rashers, from the deli, chopped", "1 1 / 2 cups Coles Brand Australian mozzarella cheese shredded", "190 g Coles Simply Less Mediterranean salad", "300 g pkt Golden Mills bakery stone baked pizza bases"]
  },
  StickyChickenWings: {
    title: "Sticky Chicken Wings",
    servings: 2,
    ingredients: ["Royco® Sweet and Sour Sauce", "12 chicken wings", "1 red or green pepper, sliced"]
  },
  tacos: {
    title: "Tacos",
    servings: 8,
    ingredients: ["1 tbsp.extra - virgin olive oil", "1 medium yellow onion, chopped", "3 cloves garlic, minced", "1 lb.ground chicken", "1 chipotle chile in adobo sauce, chopped, plus 2 tbsp.adobo sauce", "1 tsp.chili powder", "1 tsp.cumin", "Kosher salt", "Freshly ground black pepper", "3 c.shredded cheddar, divided", "8 small corn tortillas"]
  }
};

let someRecipe = Object.keys(favoriteRecipe);
someRecipe.forEach(key => {
  console.log(favoriteRecipe[key][`title`]);
  console.log(`Serves:  ${favoriteRecipe[key][`servings`]}`);
  console.log(`Ingredients:\n ${favoriteRecipe[key][`ingredients`].map(ingredient => `${ingredient}\n`).join("")}`);
});