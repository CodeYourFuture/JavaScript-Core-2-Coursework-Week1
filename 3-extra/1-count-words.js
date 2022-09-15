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
  const wordCount = {};
  let split = string.split(' ')
  // write code here
  split.forEach(word => {
    if(word === ''){
      return wordCount
    }else if (word in wordCount) {
      wordCount[word]++
    } else {
      wordCount[word] = 1
    }
  })
  return wordCount;
}

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
