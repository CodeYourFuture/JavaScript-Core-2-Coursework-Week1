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
  

*/ test("trainee Xin's coursework was marked as grade C.", () => {
  let trainee1 = {
  name: "Xin",
  score: 63
};

let result1 = formatCourseworkResult(trainee1);
console.assert(result1 === "Xin's coursework was marked as grade C.", {result1});

});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  
*/test("trainee Mona's coursework was marked as grade B.", () => {
let trainee2 = {
  name: "Mona",
  score: 78
};

let result2 = formatCourseworkResult(trainee2);
console.assert(result2 === "Mona's coursework was marked as grade B.", {result2});

});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:

*/test("returns an error message for trainee with failing grade", () => {
 let trainee3 = {
  name: "Ali",
  score: 49,
  age: 33,
  subjects: ["JavaScript", "React", "CSS"]
};

let result3 = formatCourseworkResult(trainee3);
console.assert(result3 === "Ali's coursework was marked as grade E.", {result3});

});


/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  
*/test("Error: No trainee name!", () => {
 let trainee4 = {
  score: 90,
  age: 29
};

let result4 = formatCourseworkResult(trainee4);
console.assert(result4 === "Error: No trainee name!", {result4});
});


/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
 
*/test("Error: Coursework percent is not a number!", () => {
 let trainee5 = {
  name: "Aman",
  subjects: ["HTML", "CSS", "Databases"]
};

let result5 = formatCourseworkResult(trainee5);
console.assert(result5 === "Error: Coursework percent is not a number!", {result5});

});

