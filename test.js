const COUNTRY_CURRENCY_CODES = [
  ["GB", "GBP"],
  ["DE", "EUR"],
  ["NG", "NGN"],
  ["MX", "MXN"],
];

let result = new Object;
function createLookup(countryCurrencyCodes) {
    for(i = 0; i < countryCurrencyCodes; i++) {
        result.push(countryCurrencyCodes[i]);
    }
    return result;
}
console.log(result);