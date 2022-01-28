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
const call = {
  host: {
    name: {
      first: "Alun",
      middle: "Rhys",
      last: "Turner",
      nicknames: ["KOTK", "Dog"],
    },
    age: 36,
    currentlyIn: "Basingstoke",
  },
  date: "Wed 26 Jan",
  subject: "JavaScript",
  attendees: ["Marina", "Ali", "Busra", "Deago", "Delroy"],
  "bad-key": "something from the bad key",
};

call.address = {
  firstLine: "123",
  town: "London",
};

const arrayOfCalls = [call, call, call];
//using for...of loops
for (const callObject of arrayOfCalls) {
  const thingIWant = callObject.host.name.nicknames[1];
  // console.log();
}

const recipe = {
  ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"],
};
const thisIsARegex = /asdf/;
console.log(recipe.ingredients.join("\n")); // the \ is an "escape character"