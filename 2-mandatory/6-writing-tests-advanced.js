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

  if (score>= 80) {
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

/*Write a test that checks the output of formatCourseworkResult when passed the following trainee */
test("formatCourseworkResult works for trainee Xin", () => {
  const trainee1 = {
    name: "Xin",
    score: 63
  };

  const result = formatCourseworkResult(trainee1);

  expect(result).toEqual("Xin's coursework was marked as grade C.");
});



/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:*/
  let trainee2 = {
    name: "Mona",
    score: 78
  }
  test("formatCourseworkResult works for trainee Mona", () => {
    const trainee2= {
      name: "Mona",
      score: 78
    };
  
    const result = formatCourseworkResult(trainee2);
  
    expect(result).toEqual("Mona's coursework was marked as grade B.");
  });

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:*/
    test("formatCourseworkResult takes name and grade", () => {
    let trainee3 = {
        name: "Ali",
        score: 49,
        age: 33,
        subjects: ["JavaScript", "React", "CSS"]
      }
  
    const result = formatCourseworkResult(trainee3);
  
    expect(result).toEqual("Ali's coursework was marked as grade E.");
  });


/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:*/
    test("formatCourseworkResult works for no name ", () => {
    let trainee4 = {
      score: 90,
      age: 29
      }
  
    const result = formatCourseworkResult(trainee4);
  
    expect(result).toEqual("Error: No trainee name!");
  });
 

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:*/
    test("formatCourseworkResult works for no score ", () => {
    let trainee5 = {
      name: "Aman",
      subjects: ["HTML", "CSS", "Databases"]
      }
  
    const result = formatCourseworkResult(trainee5);
  
    expect(result).toEqual("Error: Coursework percent is not a number!");
  });

