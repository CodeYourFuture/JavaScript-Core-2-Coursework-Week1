function countWords(string) {
  // your code here
  const wordCount = {};

  // write code here
  let x = string.split(" ");
  let value = 0;
  let key = [];
  for (let i = 0; i <= x.length - 1; i++) {
    value = x.filter(function (value) {
      return value == x[i];
    }).length;

    let key = x[i];
    wordCount[key] = value;
  }

  return wordCount;
}

let str = "I love CodeYourFuture";
words = countWords(str);

console.log(words);

// function countWords(string) {
//   const wordCount = {};

//   // write code here

//   return wordCount;
// }
