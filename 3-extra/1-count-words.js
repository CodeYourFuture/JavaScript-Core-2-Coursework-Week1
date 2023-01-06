/*
  This exercise is to write function that counts the number of times each word appears in a string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If the function is given the input:

  "you and me and you";

  the object returned would be:

  { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops or forEach
    - Comparison inside if statements
    - Setting values on an object
*/

function countWords(string) {
  let wordCount = {};
  let myArray = string.split(" ")
  console.log(myArray)
  console.log(myArray[0])
  console.log(myArray.length)
  // write code here
  if (string === "") {
    return wordCount
  } // I used this conditional because I understand there is an issue with the split method
  // ("split returns an array containing one empty string, rather than an empty array.")
  // [ https://stackoverflow.com/questions/5164883/the-confusion-about-the-split-function-of-javascript-with-an-empty-string ]
  // and thus I was failing the "empty string" test
  for (let i=0; i < myArray.length; i++) {
    if (myArray[i] in wordCount === false) {
  // The use of in (operator) comes from here:
  // https://www.freecodecamp.org/news/how-to-check-if-an-object-has-a-key-in-javascript/
      wordCount[myArray[i]] = 1;
    } else {
      wordCount[myArray[i]]++
    }
  }
// console.log(wordCount);
  return wordCount;
}
// countWords("")
// countWords("Love love me do you know I love you")

/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm run extra-tests`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("Code works for a small string", () => {
  expect(countWords("I love CodeYourFuture")).toEqual({
    I: 1,
    love: 1,
    CodeYourFuture: 1,
  });
});

test("A string with, some punctuation", () => {
  expect(countWords("A string with, some punctuation")).toEqual(
    { A: 1, string: 1, "with,": 1, some: 1, punctuation: 1 }
  );
});

test("Empty string", () => {
  expect(countWords("")).toEqual({});
});

test("Example task string", () => {
  expect(countWords("you're braver than you believe, stronger than you seem, and smarter than you think")).toEqual({
    "you're": 1,
    and: 1,
    "believe,": 1,
    braver: 1,
    "seem,": 1,
    smarter: 1,
    stronger: 1,
    than: 3,
    think: 1,
    you: 3,
  });
});
