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

let turkeyStuffedPittas = {
  title: "Sumac turkey-stuffed pittas",
  description: "Pair subtly spiced sumac turkey meatballs with sweet-and-sour slaw for a vibrant dinner. This recipe takes just 25 minutes to make and is budget-friendly, too",
  serves: 2,
  prep: "15 mins",
  cook: "10 mins",
  ingredients: ["300g turkey mince", "1 tsp sumac", "1 tsp ground cumin",
"1 garlic clove,crushed", "1 lemon, zested and juiced", "1 tbsp olive oil", "¼ white cabbage finely sliced", "small bunch of mint leaves picked and chopped", "½ red onion finely sliced", "½ cucumber, deseeded and chopped", "3 tbsp pomegranate seeds", "2 large pittas, toasted",
"dairy-free natural yogurt, to serve"] 
};

console.log(turkeyStuffedPittas.title);
console.log(`serves: ${turkeyStuffedPittas.serves}`);
console.log("ingredients:")
for(const ingredient of turkeyStuffedPittas.ingredients){
  console.log(ingredient)
}



let chickenFajitas = {
  title: "Easy chicken fajitas",
  description: "Need a simple, vibrant midweek meal the family will love? Put together these easy chicken fajitas and people can create their own masterpieces at the table",
  serves: 4,
  prep: "15 mins",
  cook: "10 mins",
  ingredients: ["2 chicken breasts, finely sliced", "1 red onion, finely sliced", "1 red pepper, sliced", "1 red chilli, finely sliced (optional)", "smoked paprika", "1tbsp ground coriander", "ground cumin", "2 garlic cloves, crushed", "4tbsp olive oil", "1 lime, juiced", "Tabasco",
"8 tortillas", "mixed salad", "230g fresh salsa"]
}

console.log(chickenFajitas.title);
console.log(`serves: ${chickenFajitas.serves}`);
console.log("ingredients:");
for (const ingredient of chickenFajitas.ingredients) {
  console.log(ingredient);
}




let pestoPasta = {
  title:"Lemon & greens pesto pasta",
  description: "Prep, cook and serve this quick and easy lemon and green veg pasta in just 15 minutes. It's perfect for busy days, and will be loved by the whole family",
  serves: 4,
  prep: "5 mins",
  cook: "10 mins",
  ingredients: ["350g pasta (we used linguine)", "½ small head of broccoli, cut into florets", "large handful of basil", 
"1 large handful of spinach wilted in boiling water, cooled and excess water squeezed out", "4 tbsp pine nuts", "1 garlic clove, grated", 
"½ lemon, zested and juiced", "6 tbsp extra virgin olive oil", 
"large handful of frozen peas, set aside in boiled water until heated through", "3 tbsp grated parmesan or vegetarian hard cheese",
"3 tbsp soft cheese"]
}

console.log(pestoPasta.title);
console.log(`serves: ${pestoPasta.serves}`);
console.log("ingredients:");
for (const ingredient of pestoPasta.ingredients) {
  console.log(ingredient);
}


let HalloumiFlatbreadsRecipe ={
  title: "Halloumi flatbreads",
  description: "Try these simple veggie halloumi wraps with a crunchy slaw and a generous helping of hummus. A great cheesy budget option for a midweek meal",
  serves: 8,
  prep: "10 mins",
  cook: "25 min",
  ingredients:["50g pumpkin seeds", "2 tbsp cumin seeds",
"1 small red cabbage (about 650g), core removed, shredded",
"2 mixed peppers, cut into strips", "2 tbsp white wine vinegar",
"2 tbsp extra virgin olive oil", "6-8 flatbreads or wraps", "100g hummus",
"80g bag rocket", "2 x 250g blocks halloumi, each cut into 12 strips"
]

}
console.log(HalloumiFlatbreadsRecipe.title);
console.log(`serves: ${HalloumiFlatbreadsRecipe.serves}`);
console.log("ingredients:");
for (const ingredient of HalloumiFlatbreadsRecipe.ingredients) {
  console.log(ingredient);
}



let slowCookerPastaRecipes = {
  title: "Slow-cooker bolognese",
  description: "Batch cook a delicious and healthy spaghetti bolognese in your slow cooker. Freeze the leftovers for easy midweek dinners when you're more pushed for time",
  serves: 12,
  prep: "15 mins",
  cook: "7 hrs and 30 mins - 9 hrs and 30 mins",
  ingredients:["4 tbsp olive oil", "1½kg lean minced beef",
"4 onions, finely chopped", "3 carrots, finely chopped",
"4 celery sticks, finely chopped", "8 garlic cloves, crushed",
"500g mushrooms, sliced", "4 x 400g cans chopped tomatoes",
"6 tbsp tomato purée", "2 tbsp dried mixed herbs", "2 bay leaves",
"1 tbsp sugar", "cooked spaghetti", "parmesan, to serve"]
}

console.log(slowCookerPastaRecipes.title);
console.log(`serves: ${slowCookerPastaRecipes.serves}`);
console.log("ingredients:");
for (const ingredient of slowCookerPastaRecipes.ingredients) {
  console.log(ingredient);
}

