/*
  You can add properties to objects and assign values to them using bracket notation.
  You can also change the value assigned to a property using bracket notation.
*/

let student = {
  name: "Reshma Saujani",
  examScore: 65,
  hasPassed: false,
};

/*
  Using bracket notation
    - Add a property to the student object for attendance
    - Set the value of attendance to 90
*/

student["attendance"] = 90; // don't forget the quotation marks ("")
//console.log(student.attendance);

/*
  - Write an "if" statement that changes the value of hasPassed to true
      if the student has attendance that is equal or greater than 90
      AND
      exam score is above 60.
  - Use bracket notation to change the value of hasPassed
*/
// let student = {
//   name: 'Reshma Saujani',
//   examScore: 65,
//   hasPassed: false,
//   attendance: 90
// };

if (student.attendance >= 90 && student.examScore > 60) {
  student["hasPassed"] = true;
}

console.log(student);

/* EXPECTED RESULT

  {
    name: "Reshma Saujani",
    examScore: 65,
    hasPassed: true,
    attendance: 90
  }

*/
