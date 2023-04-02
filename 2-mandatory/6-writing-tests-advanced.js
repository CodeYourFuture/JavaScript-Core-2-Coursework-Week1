/*
  For this exercise, the function has been written for you and you need to write
  the tests.

  This function takes a trainee parameter that is an object. The object
  contains: name (which represents the trainee's name) and score (which
  represents the mark given to the trainee's coursework).

  It uses these to format a string that tells the user how much coursework the
  trainee has completed.
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

function formatCourseworkResult(trainee) {
  if (!trainee.name) {
    return "Error: No trainee name!";
  }
  let traineeName = trainee.name;

  if (typeof trainee.score != "number") {
    return "Error: Coursework percent is not a number!";
  }
  let traineeGrade = convertScoreToGrade(trainee.score);

  return `${traineeName}'s coursework was marked as grade ${traineeGrade}.`;
}

/* ======= TESTS - FOR THIS EXERCISE YOU SHOULD MODIFY THEM! =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 6-writing-tests-advanced.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Xin",
    score: 63
  }
*/
let trainee1 =  {
    name: "Xin",
    score: 63,
  }
test("if Xin's grade is C", () => {
  expect(formatCourseworkResult(trainee1)).toBe("Xin's coursework was marked as grade C.");
});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Mona",
    score: 78
  }
*/
let trainee2 =  {
    name: "Mona",
    score: 78,
  }
test("if Mona's grade is B", () => {
  expect(formatCourseworkResult(trainee2)).toBe("Mona's coursework was marked as grade B.");
});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Ali",
    score: 49,
    age: 33,
    subjects: ["JavaScript", "React", "CSS"]
  }
*/
let trainee3 =  {
    name: "Ali",
    score: 49,
  }
test("if Ali's grade is E", () => {
  expect(formatCourseworkResult(trainee3)).toBe("Ali's coursework was marked as grade E.");
});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    score: 90,
    age: 29
  }
*/
let trainee4 =  {
    
    score: 90,
  }
test("if trainee's name isn't provided", () => {
  expect(formatCourseworkResult(trainee4)).toBe("Error: No trainee name!");
});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Aman",
    subjects: ["HTML", "CSS", "Databases"]
  }
*/
let trainee5 =  {
    name: "Aman",
  }
test("if trainee's score isn't provided", () => {
  expect(formatCourseworkResult(trainee5)).toBe("Error: Coursework percent is not a number!");
});