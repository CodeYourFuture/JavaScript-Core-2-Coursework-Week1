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

function Receipe(name, Serves, Ingredients){
  
  this.name = name;
  this.Serves = Serves;
  this.Ingredients = Ingredients;
  this.output = function(){
    return [console.log(this.name),
            console.log(`Serves: ${Serves}`),
            console.log(`Ingredients:`),
            this.Ingredients.forEach(val => console.log(val))
          ]
  };
  
}

let recipe1 =new Receipe("Karnabahar",2,["Cauliflower","Onion","Tomato Paste","Potatoes","Beef mince" ])
let receipe2 =new Receipe("Kereviz",3,["Celery","Potatoes","Olive Oil","Butter beans","Onions"]);
let receipe3 =new Receipe("Lentil Soup",3,["Red Lentil","Tomato paste","Carrot","Onion"])
let receipe4 =new Receipe("Kabak Dolmasi",3,["Pumpkin","Coarse","Mixed Spice","Tomato paste","Garlic","Yoghurt"])
let receipe5 =new Receipe("Cig Kofte",5,["Coarse","Chilli pepper flakes","Tomato paste","Sumac","Lettuce","Lemon","Mixed Spice"])

recipe1.output();
receipe2.output();

