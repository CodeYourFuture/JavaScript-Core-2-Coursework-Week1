function countWords(string) {
  const wordCount = {};
  if (string === "") {
    return wordCount;
  } else {
  // write code here
  string.split(" ").forEach((word) => {
     
    console.log(word)
    const numberOfOccurrences = string.match(new RegExp(word, "g")).length
    wordCount[word] = numberOfOccurrences
  })}
  return wordCount;
}


//console.log(myTextObject)


let string1 = "you're braver than you believe, stronger than you seem, and smarter than you think";

console.log(countWords(string1))


// {
//     "you're": 1,
//     and: 1,
//     "believe,": 1,
//     braver: 1,
//     "seem,": 1,
//     smarter: 1,
//     stronger: 1,
//     than: 3,
//     think: 1,
//     you: 3,
//   }