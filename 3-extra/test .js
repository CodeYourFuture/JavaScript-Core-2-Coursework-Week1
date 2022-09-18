// function getWordTotal(word, arrayOfWords) {
//   let wordTotal = 0;
//   for (let i = 0; i < arrayOfWords.length; i++) {
//     if (arrayOfWords[i] == word) {
//       wordTotal++;
//     }
//   }
//   return wordTotal;
// }

// console.log(getWordTotal()
const COUNTRY_CURRENCY_CODES = [
  ["GB", "GBP"],
  ["DE", "EUR"],
  ["NG", "NGN"],
  ["MX", "MXN"],
];

function createLookup(countryCurrencyCodes) {
 return Object.fromEntries(countryCurrencyCodes)
}
console.log(createLookup(COUNTRY_CURRENCY_CODES))