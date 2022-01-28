/*
  Objects can be thought of as key/value storage, like a dictionary or a 'lookup'.

  You have a variable called COUNTRY_CURRENCY_CODES which is an array of arrays.
  Each inner array contains a country code and its currency code.

  Write a function called createLookup that
    - takes COUNTRY_CURRENCY_CODES as an argument (remember, it's an array of arrays)
    - returns a new object where the keys are the country codes and the values are the currency codes
    Hint: you'll need to use bracket notation to add new key/value pairs to the object
*/

const COUNTRY_CURRENCY_CODES = [
  ["GB", "GBP"],
  ["DE", "EUR"],
  ["NG", "NGN"],
  ["MX", "MXN"],
];


function createLookup(countryCurrencyCodes){
  // let newObject = {};
  // for (let pair of countryCurrencyCodes){
  //   newObject[pair[0]] = pair[1];
  // }
  // return newObject;
  let newObject = {};
  for (let value of countryCurrencyCodes){
    let newKey = value[0];
    let newValue = value[1];
    newObject[newKey] = newValue;
  }
  return newObject;
}
// console.log(createLookup(COUNTRY_CURRENCY_CODES));

// https://www.tutorialspoint.com/converting-array-of-arrays-into-an-object-in-javascript
// let createLookup = (countryCurrencyCodes = []) => {
//   let newObject = {};
//   for (let pair of countryCurrencyCodes){
//     let [key, value] = pair;
//     newObject[pair] = value
//   }
//   return newObject;
// }
// console.log(createLookup(countryCurrencyCodes));

// function createLookup(countryCurrencyCodes) {
//   // write code here
//   let newObject = {};
//   for (let pair of countryCurrencyCodes){
//         let [key, value] = pair;
//         newObject[pair] = value;
//       }
//       return newObject;
// }
// console.log(createLookup(countryCurrencyCodes));
/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 2-currency-code-lookup.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("creates country currency code lookup", () => {
  expect(createLookup(COUNTRY_CURRENCY_CODES)).toEqual({
    GB: "GBP",
    DE: "EUR",
    NG: "NGN",
    MX: "MXN",
  });
});