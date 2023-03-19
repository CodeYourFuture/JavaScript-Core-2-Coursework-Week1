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
  let traineeName = trainee.name;

  let traineeGrade = convertScoreToGrade(trainee.score);

  /* Added */
  let traineeAge = trainee.age;

  /* Added */
  let traineeSubjects = trainee.subjects;

  /* First condition*/
  if (trainee.age == undefined && trainee.subjects == undefined) {
    if (!trainee.name) {
      return "Error: No trainee name!";
    }
    if (typeof trainee.score != "number") {
      return "Error: Coursework percent is not a number!";
    }
    return `${traineeName}'s coursework was marked as grade ${traineeGrade}.`;
  }

  /* Second condition*/
  if (trainee.name == undefined && trainee.subjects == undefined) {
    if (typeof trainee.age != "number") {
      return "Error: Age is not a number!";
    }
    if (typeof trainee.score != "number") {
      return "Error: Coursework percent is not a number!";
    }
    return `A student with the age of ${traineeAge} was marked as grade ${traineeGrade}.`;
  }

  /* Third condition*/
  if (trainee.score == undefined && trainee.age == undefined) {
    if (!Array.isArray(trainee.subjects)) {
      return "Error: Not a subject list!";
    }
    if (!trainee.name) {
      return "Error: No trainee name!";
    }
    return `${traineeName} completed the following subjects: ${traineeSubjects.join(
      ", "
    )}.`;
  }

  /* All properties available in the object*/
  return `Name: ${traineeName}, Age: ${traineeAge}, Subjects: ${traineeSubjects.join(
    ", "
  )}, Grade: ${traineeGrade}.`;
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
test("checking trainee name and grade with a score of 63", () => {
  const student = {
    name: "Xin",
    score: 63,
  };
  expect(formatCourseworkResult(student)).toEqual(
    "Xin's coursework was marked as grade C."
  );
});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Mona",
    score: 78
  }
*/
test("checking trainee name and grade with a score of 78", () => {
  const student = {
    name: "Mona",
    score: 78,
  };
  expect(formatCourseworkResult(student)).toEqual(
    "Mona's coursework was marked as grade B."
  );
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
test("checking trainee name, age, subjects and grade with a score of 78", () => {
  const student = {
    name: "Ali",
    score: 49,
    age: 33,
    subjects: ["JavaScript", "React", "CSS"],
  };
  expect(formatCourseworkResult(student)).toEqual(
    "Name: Ali, Age: 33, Subjects: JavaScript, React, CSS, Grade: E."
  );
});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    score: 90,
    age: 29
  }
*/
test("checking trainee age and grade with a score of 90", () => {
  const student = {
    score: 90,
    age: 29,
  };
  expect(formatCourseworkResult(student)).toEqual(
    "A student with the age of 29 was marked as grade A."
  );
});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Aman",
    subjects: ["HTML", "CSS", "Databases"]
  }
*/
test("checking trainee name and subjects", () => {
  const student = {
    name: "Aman",
    subjects: ["HTML", "CSS", "Databases"],
  };
  expect(formatCourseworkResult(student)).toEqual(
    "Aman completed the following subjects: HTML, CSS, Databases."
  );
});
