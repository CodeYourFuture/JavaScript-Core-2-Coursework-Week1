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

const recipeOne = {
  Title: "Pasta",
  Serves: 4,
  Ingredients: ["Chicken", "Pasta", "Mushroom"],
};

for (let property in recipeOne) {
  if (property === "Title") {
    console.log(recipeOne[property]);
  } else if (property === "Serves") {
    console.log(`${property}: ${recipeOne[property]}`);
  } else {
    console.log(property + ":");
    recipeOne[property].forEach((item) => {
      console.log(item);
    });
  }
}
const recipeTwo = {
  Title: "Hamburger",
  Serves: 2,
  Ingredients: ["Meat", "Bread", "Cheese"],
};

for (let property in recipeTwo) {
  if (property === "Title") {
    console.log(recipeTwo[property]);
  } else if (property === "Serves") {
    console.log(`${property}: ${recipeTwo[property]}`);
  } else {
    console.log(property + ":");
    recipeTwo[property].forEach((item) => {
      console.log(item);
    });
  }
}
const recipeThree = {
  Title: "Pizza",
  Serves: 6,
  Ingredients: ["Flour", "Cheese", "Mushroom"],
};

for (let property in recipeThree) {
  if (property === "Title") {
    console.log(recipeThree[property]);
  } else if (property === "Serves") {
    console.log(`${property}: ${recipeThree[property]}`);
  } else {
    console.log(property + ":");
    recipeThree[property].forEach((item) => {
      console.log(item);
    });
  }
}
const recipeFour = {
  Title: "Cake",
  Serves: 10,
  Ingredients: ["Flour", "Milk", "Egg"],
};

for (let property in recipeFour) {
  if (property === "Title") {
    console.log(recipeFour[property]);
  } else if (property === "Serves") {
    console.log(`${property}: ${recipeFour[property]}`);
  } else {
    console.log(property + ":");
    recipeFour[property].forEach((item) => {
      console.log(item);
    });
  }
}
const recipeFive = {
  Title: "Steak",
  Serves: 3,
  Ingredients: ["Meat", "Butter", "Garlic"],
};

for (let property in recipeFive) {
  if (property === "Title") {
    console.log(recipeFive[property]);
  } else if (property === "Serves") {
    console.log(`${property}: ${recipeFive[property]}`);
  } else {
    console.log(property + ":");
    recipeFive[property].forEach((item) => {
      console.log(item);
    });
  }
}
