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

// function createLookup(countryCurrencyCodes) {
//   let obj = {};
//   for (let i = 0; i < countryCurrencyCodes.length; i++) {
//     for (let j = 0; j < countryCurrencyCodes[i].length; j++) {
//       if (countryCurrencyCodes[i].indexOf(countryCurrencyCodes[i][j]) === 0) {
//         obj[countryCurrencyCodes[i][j]] = countryCurrencyCodes[i][1];
//       }
//     }
//   }
//   return obj;
// }
//💫💫💫💫💫💫💫💫💫💫💫💫
// function createLookup(countryCurrencyCodes) {
//   let obj = {};
//   for (let i = 0; i < countryCurrencyCodes.length; i++) {
//     obj[countryCurrencyCodes[i][0]] = countryCurrencyCodes[i][1];
//   }
//   return obj;
// }
//💫💫💫💫💫💫💫💫💫💫💫💫
// function createLookup(countryCurrencyCodes) {
//   let obj = {};
//   for (let i = 0; i < countryCurrencyCodes.length; i++) {
//     let arr = countryCurrencyCodes[i].values();
//     // console.log(arr.next().value);
//     obj[arr.next().value] = arr.next().value;
//   }
//   return obj;
// }
// console.log(createLookup(COUNTRY_CURRENCY_CODES));
function createLookup(countryCurrencyCodes) {
  return Object.fromEntries(countryCurrencyCodes);
}
createLookup(COUNTRY_CURRENCY_CODES);
//💫💫
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
