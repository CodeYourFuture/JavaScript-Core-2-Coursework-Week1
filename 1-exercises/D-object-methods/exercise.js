/*
  The values assigned to object properties can also be functions.
  When a function belongs to an object it is called a method.

  Add a method called getName to the students object that
    - takes an argument called name which is a string
    - console.logs a message that says: "Student name: " followed by the name given as an argument
*/

let student = {
  name: "Daniel",
  getName: function () {
    getName = student.name;
    console.log("Student name: " + getName);
  }
  // console.console.log(`Student name: ${this.getName}`);
  // write code here
}

student.getName("Daniel");

/* EXPECTED RESULT

  Student name: Daniel

*/