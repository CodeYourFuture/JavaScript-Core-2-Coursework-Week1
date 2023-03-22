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

//initiate empty object
let countryCurrencyCodesObj = {};

function createLookup(countryCurrencyCodes) {
  //as input data type is an array, use .map() method to process each item inside array
  countryCurrencyCodes.map(
    (countryCurrencyCode) =>
      //Use index values of 0 and 1 to access the country and currency codes and use square bracket notation to add the keys and values to countryCurrencyCodesObj object
      (countryCurrencyCodesObj[countryCurrencyCode[0]] = countryCurrencyCode[1])
  );
  return countryCurrencyCodesObj;
}

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
