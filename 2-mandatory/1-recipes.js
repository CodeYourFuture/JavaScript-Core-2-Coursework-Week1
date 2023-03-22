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
/*function setcreatNewRecipe(titlePram,servingsPram,ingrediantsPram){
  return {
    title:titlePram,
    servings:servingsPram,
    ingredients:ingrediantsPram
    }
 } */

let recipe = [ {
 title: "English Breakfast",
 servings:1 ,
 ingredients:["onions","beans","eggs","hashbrowns"]
},
{
 title:"Tuna Pasta",
 servings:2 ,
 ingredients:["onions","tuna","pasta",]
},

{
 title:"chicken pasta",
 servings:4,
 ingredients:["chicken","onions","pasta","bell peppers"]
},
{ title:"chicken rice",
  servings:4,
  ingredients:["chicken","rice","onions","spices"]

},
{
  title:"fish and chips",
  servings:2,
  ingredients:["fish","potatoes","oil"]
}]
function getRecipe(){

    for(let i = 0 ;i<recipe.length;i++){
        let r = recipe[i]
        console.log("title:" + r.title)
        console.log("serves:" + r.servings)
        console.log("ingredients:")


        for(let j = 0;j<r.ingredients.length;j++){
          console.log( r.ingredients[j])
        }
        console.log(" ")
    }
}
 getRecipe();
/*function setcreatNewRecipe(titlePram,servingsPram,ingrediantsPram){
  return {
    title:titlePram,
    servings:servingsPram,
    ingredients:ingrediantsPram
    }
 }
console.log(setcreatNewRecipe("chicken rice",4,["chicken","rice"]))*/