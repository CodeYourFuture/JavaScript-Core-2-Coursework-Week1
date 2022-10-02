let capitalCities = {
  UnitedKingdom: {
    name: "London",
    population: 20,
  },
  China: {
    name: "Beijing",
  },
};

let myLaptop = {
  model: "HP",
  color: "grey",
};
myLaptop.screenSize = 16;
let athlete = {
  name: "Usain Bolt",
  goldMedals: 25,
  sayName: function () {
    return "My name is " + this.name;
  },
};

console.log(athlete.sayName()); // returns "My name is Usain Bolt"
// console.log(myLaptop);
// capitalCities.UnitedKingdom.population = 99999;
console.log(capitalCities);
