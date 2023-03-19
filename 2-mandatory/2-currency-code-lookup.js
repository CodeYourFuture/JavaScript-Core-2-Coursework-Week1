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

function createLookup(countryCurrencyCodes) {
  let myObject = {};
  //  countryCurrencyCodes.forEach( (x[0]) => (let myObject.x[0] = x[1]))
  for (arr of countryCurrencyCodes) {
    let key = arr[0];
    let value = arr[1];
    myObject[key] = value;
  }
 return myObject;
}
// createLookup(COUNTRY_CURRENCY_CODES);

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
