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

//recipe 1
const cutletFood1={
  title:"cutlet1",
  Serves: 2,
  ingredients:["carrots1","potatoes1", "broccoli1"]
}
// console.log(cutletFood1.title);
// console.log(`serves: ${cutletFood1["Serves"]}`);
// cutletFood1.ingredients.forEach((ingredient) => {
//   console.log(ingredient);
// });

//recipe 2
const cutletFood2={
  title:"cutlet2",
  Serves: 4,
  ingredients:["carrots2","potatoes2", "broccoli2"]
}
// console.log(cutletFood2.title);
// console.log(`serves: ${cutletFood2["Serves"]}`);
// cutletFood2.ingredients.forEach((ingredient) => {
//   console.log(ingredient);
// });
// recipe 3
const cutletFood3={
  title:"cutlet3",
  Serves: 21,
  ingredients:["carrots3","potatoes3", "broccoli3"]
}
// console.log(cutletFood3.title);
// console.log(`serves: ${cutletFood3["Serves"]}`);
// cutletFood3.ingredients.forEach((ingredient) => {
//   console.log(ingredient);
// });

//recipe 4
const cutletFood4={
  title:"cutlet4",
  Serves: 8,
  ingredients:["carrots4","potatoes4", "broccoli4"]
}
// console.log(cutletFood4.title);
// console.log(`serves: ${cutletFood4["Serves"]}`);
// cutletFood4.ingredients.forEach((ingredient) => {
//   console.log(ingredient);
// });

//recipe 5
const cutletFood5={
  title:"cutlet5",
  Serves: 9,
  ingredients:["carrots5","potatoes5", "broccoli5"]
}
// console.log(cutletFood5.title);
// console.log(`serves: ${cutletFood5["Serves"]}`);
// cutletFood5.ingredients.forEach((ingredient) => {
//   console.log(ingredient);
// });

let allRecipes =[cutletFood1,cutletFood2,cutletFood3,cutletFood4,cutletFood5]
  allRecipes.forEach((recipe)=>{
   console.log(`${recipe.title} \n serves :${recipe.Serves} \n ${recipe.ingredients.join(" \n ")}`);
})
