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

const myCoffeeLatte = {
  coffeeTpe: 'Ethiopian',
  isOrganic: true,
  isRoast: true,
  roastLevel: "medium",
  shots: 1.5,
  ingredients: ['Milk', 'Caremel', 'No Sugar'],
  MakeCoffee: function () {
    let haveCoffe;
    if (this.coffeeTpe === 'Ethiopian' && this.isOrganic === true && this.isRoast === true && this.roastLevel === 'medium') {
      console.log('Injoy your ☕ Caramel Latte 😀')
    } else {
      console.log("Not my COFFEE😉");
    }
  }
}
console.log(myCoffeeLatte) // this is loging the whole obeject and it's properties.

myCoffeeLatte.ingredients.filter(elements => console.log(elements)) // this is to show the ingredients one in each line.

myCoffeeLatte.MakeCoffee(); // calling makeCoffee method and see how it works.

myCoffeeLatte.isOrganic = false; //this is to check if the conditon is working 

myCoffeeLatte.MakeCoffee(); // result after one of the conditions is assign to a false value.