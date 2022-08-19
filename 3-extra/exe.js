function countWords(string) {
  const wordCount = {};

  // write code here
  if (!string) {
    return wordCount;
  }
  let x = string.split(" ");
  let value = 0;
  let key = 0;

  for (let i = 0; i <= x.length - 1; i++) {
    value = x.filter(function (value) {
      return value == x[i];
    }).length;

    key = x[i];
    wordCount[key] = value;
  }

  return wordCount;
}

let str = "";
words = countWords(str);

console.log(words);

// function countWords(string) {
//   const wordCount = {};

//   // write code here

//   return wordCount;
// }
