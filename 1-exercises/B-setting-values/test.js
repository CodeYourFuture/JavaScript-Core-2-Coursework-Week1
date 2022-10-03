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

// console.log(athlete.sayName()); // returns "My name is Usain Bolt"
// console.log(myLaptop);
// capitalCities.UnitedKingdom.population = 99999;
// console.log(capitalCities);
// let kittenName = "Feathers";

// let kitten = {
//   name: kittenName,
//   toyCollection: ["blue ball", "green ball", "hoover box"],
//   favoriteLocation: {
//     roomName: "Living room",
//     napPlace: "window",
//     idealTemperatureCelsius: 24,
//   },
// };
// let kit = kitten.toString();
// console.log(kit);
const COUNTRY_CURRENCY_CODES = [
  ["GB", "GBP"],
  ["DE", "EUR"],
  ["NG", "NGN"],
  ["MX", "MXN"],
];

function createLookup(countryCurrencyCodes) {
  // write code here
  let result = new Object();
  for (Codes of COUNTRY_CURRENCY_CODES) {
    result[Codes[0]] = Codes[1];
  }
  return result;
}
console.log(createLookup(COUNTRY_CURRENCY_CODES));
