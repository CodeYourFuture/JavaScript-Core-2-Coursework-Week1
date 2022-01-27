/*
  You can also access the value of a property using bracket notation.
  Bracket notation can be used when the property is stored as the value of a variable.
  This can be very useful for iterating through an object's properties or when accessing a lookup table.
*/

let capitalCities = {
  UnitedKingdom: "London",
  China: "Beijing",
  Peru: "Lima"
};

/*
  You have an object, capitalCities, that contains key/value pairs of countries and their capital cities.
  Log the value for the property assigned to the variable myCountry using bracket notation.
  Do not use dot notation for this exercise!
*/

let myCountry = "UnitedKingdom";
let myCapitalCity = capitalCities[myCountry]

console.log(myCapitalCity);

/* EXPECTED RESULT

  London

*/