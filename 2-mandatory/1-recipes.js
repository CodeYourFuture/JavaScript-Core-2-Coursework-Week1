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

// write code her

let myFavoriteRecipe1 = {
    title : "manti",
    serving : 4,
    ingredients : [" dough", "minced meat", "tomato sauce","yogurt"]
  }
console.log(myFavoriteRecipe1.title);
console.log(`Serves :${myFavoriteRecipe1.serving}`);
console.log(`ingredients :`)
myFavoriteRecipe1.ingredients.forEach( ingredient => console.log(ingredient));


let myFavoriteRecipe2 ={
    title : " Sini Kebab",
    serving : 4,
    ingredients : ['minced meat','parsley', 'onion', 'capia pepper', 'spices']
  }

 console.log(myFavoriteRecipe2.title);
 console.log(`Serves : ${myFavoriteRecipe2.serving}`) 
console.log(`ingredients :`)
myFavoriteRecipe2.ingredients.forEach( ingredient => console.log(ingredient));


let myFavoriteRecipe3 ={
    title : "Pilav",
    serving : 2,
    ingredients :['rice', 'butter', 'salt', 'hot water']
  }
console.log(myFavoriteRecipe3.title);
console.log(`Serves : ${myFavoriteRecipe3.serving}`);
console.log(`ingredients:`)
myFavoriteRecipe3.ingredients.forEach(ingredient => console.log(ingredient));




let myFavoriteRecipe4 = {
    title :"icli kofte",
    serving : 8,
    ingredients :['fine wheat', 'minced-meat', 'vegetable oil', 'spices']
   }

 console.log(myFavoriteRecipe4.title);
 console.log(`Serves : ${myFavoriteRecipe4.serving}`);
 console.log(`ingredients`)
 myFavoriteRecipe4.ingredients.forEach(ingredient => console.log(ingredient))  ;

 
 let myFavoriteRecipe5={
      title :"ezogelin soup",
      serving : 5,
      ingredients : ['lentil','rice',' wheat', 'onion', 'salt', 'spices', 'hot water']
    }

console.log(myFavoriteRecipe5.title);
 console.log(`Serves : ${myFavoriteRecipe5.serving}`);
 console.log(`ingredients`)
 myFavoriteRecipe5.ingredients.forEach(ingredient => console.log(ingredient))  ;

 