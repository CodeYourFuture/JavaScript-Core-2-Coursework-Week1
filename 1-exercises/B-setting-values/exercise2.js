/*
  You can add properties to objects and assign values to them using bracket notation.
  You can also change the value assigned to a property using bracket notation.
*/

let student = {
  name: "Reshma Saujani",
  examScore: 65,
  hasPassed: false
};

/*
  Using bracket notation
    - Add a property to the student object for attendance
    - Set the value of attendance to 90
*/

student["attendance"];
console.log(student["attendance"]);
// So there must be a point with the above 2 lines (mainly the first one); the key is 'declared'
// but is "undefined" as it hasn't been assigned a value
student["attendance"] = 90;
console.log(student["attendance"]);

// write code here
student["Attendance"] = 90
console.log[student["Attendance"]]

// How to do this in two steps i.e. add the property WITHOUT any value like in the previous exercise
// where we added Peru as a nested objected without any keys?
// Would the equivalent be 0 here (i.e. student["Attendance"] = 0)? Or undefined? Or this is a very
// pendantic and pointless question?
// (These questions have now been answered)

/*
  - Write an "if" statement that changes the value of hasPassed to true
      if the student has attendance that is equal or greater than 90
      AND
      exam score is above 60.
  - Use bracket notation to change the value of hasPassed
*/


// write code here
if (student["Attendance"] >=90 && student["examScore"] > 60) {
  student["hasPassed"] = true;
}

// Surely by now I should be using the ternary operator to code such if statements...
// student["Attendance"] >=90 && student["examScore"] > 60 ? student["hasPassed"] = true;
// But is ternary operator only good for if / else and not just if?

console.log(student);

/* EXPECTED RESULT

  {
    name: "Reshma Saujani",
    examScore: 65,
    hasPassed: true,
    attendance: 90
  }

*/