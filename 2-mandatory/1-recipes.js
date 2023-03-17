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

let recipe = {
  title :"Mole",
  servings : 2 ,
  ingredients : [
    "cinnamon" , "cumin" , "cocoa"
  ],
  displayRecipe : function (){
    console.log(this.title);
    console.log("Serves : "+ this.servings);
    console.log("Ingredients:");
    for (item of this.ingredients){
      console.log(item);
    }
  }
}
let recipe1 = {
  title :"Biryani",
  servings : 2 ,
  ingredients : [
    "rice" , "spices" , "meat"
  ],
  displayRecipe : function (){
    console.log(this.title);
    console.log("Serves : "+ this.servings);
    console.log("Ingredients:");
    for (item of this.ingredients){
      console.log(item);
    }
  }
}
let recipe2 = {
  title :"Anda Paratha",
  servings : 2 ,
  ingredients : [
    "eggs" , "spices" , "atta" , "oil"
  ],
  displayRecipe : function (){
    console.log(this.title);
    console.log("Serves : "+ this.servings);
    console.log("Ingredients:");
    for (item of this.ingredients){
      console.log(item);
    }
  }
}
recipe.displayRecipe();
recipe1.displayRecipe();
recipe2.displayRecipe();
