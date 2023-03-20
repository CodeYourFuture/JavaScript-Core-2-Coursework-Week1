/*
  For this exercise, the function has been written for you and you need to write
  the tests.

  This function takes a marking coursework score and converts it into a string
  representing a grade (from A to E). It then returns the grade.
*/

function convertScoreToGrade(score) {
  let grade = null;

  if (score >= 80) {
    grade = "A";
  } else if (score >= 70) {
    grade = "B";
  } else if (score >= 60) {
    grade = "C";
  } else if (score >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  return grade;
}

/* ======= TESTS - FOR THIS EXERCISE YOU SHOULD MODIFY THEM! =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 5-writing-tests.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

/*
  The first test has been written for you. You need to fix the test so that it
  passes.
*/
test("a score of 83 is grade A", () => {
  expect(convertScoreToGrade(83)).toBe("A");
});

/*
  The rest of the tests have comments describing what to test and you need to
  write a matching test
*/

test("a score of 71 is grade B", () => {
  /* Remove the .skip above, then write the test body. */
  expect(convertScoreToGrade(71)).toBe("B");
});
/*
 

/*
  Write a test that checks a score of 68 is grade C
*/
test("a score of 68 is grade C", () => {
  expect(convertScoreToGrade(68)).toBe("C");
});

/*
  Write a test that checks a score of 55 is grade D
*/
test("a score of 55 is grade D", () => {
  expect(convertScoreToGrade(55)).toBe("D");
});

/*
  Write a test that checks a score of 49 is grade E
*/
test("a score of 49 is grade E", () => {
  expect(convertScoreToGrade(49)).toBe("E");
});

/*
  Write a test that checks a score of 30 is grade E
*/
test("a score of 30 is grade E", () => {
  expect(convertScoreToGrade(30)).toBe("E");
});

/*
  Write a test that checks a score of 70 is grade B
*/
test("a score of 70 is grade B", () => {
  expect(convertScoreToGrade(70)).toBe("B");
});
