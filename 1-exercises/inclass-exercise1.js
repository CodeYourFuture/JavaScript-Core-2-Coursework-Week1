let kitten = {
  furColour: "orange",
  age: "23",
};

let laptop = {
  brand: "Lenovo",
  ram: "5GB",
};

let phone = {
  operatingSystem: "iOS",
  hasStylus: true,
  megapixels: 12,
  batteryLife: "24 hours",
};

const COUNTRY_CURRENCY_CODES = [
  ["GB", "GBP"],
  ["DE", "EUR"],
  ["NG", "NGN"],
  ["MX", "MXN"],
];

function createLookup(countryCurrencyCodes) {
  // write code here
  const countryAndCurrencyObject = countryCurrencyCodes.map((item) =>
    item.replaceAll("[]", "")
  );
  return countryAndCurrencyObject;
}

createLookup(COUNTRY_CURRENCY_CODES);
