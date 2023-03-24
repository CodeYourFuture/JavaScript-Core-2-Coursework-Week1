/*
  The values assigned to object properties can also be functions.
  When a function belongs to an object it is called a method.

  Add a method called getName to the students object that
    - takes an argument called name which is a string
    - console.logs a message that says: "Student name: " followed by the name given as an argument
*/

let student = {
  getName: function(name) {
    if (typeof name === "string") {
      console.log(`Student name: ${name}`)
    } else {
      console.log(`the argument provided must be a string!`);
    }
  }
}

student.getName("Daniel");

/* EXPECTED RESULT

  Student name: Daniel

*/