/*
  An object's properties can have values that are other objects or arrays.
*/

let basketballTeam = {
  name: "Chicago Bulls",
  numberOfPlayers: 15,
  topPlayers: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman"],
  homeStadium: {
    name: "United Center",
    capacity: 21000,
    address: "1901 W Madison St",
  },
};

/*
  Write code that
    - accesses the basketball team's top players array
    - sorts the top players in alphabetical order
    - console.logs the name of each player on a new line
*/

// write code here
let sortTopPlayers = basketballTeam.topPlayers.sort();

console.log(sortTopPlayers);


/* EXPECTED RESULT

  Dennis Rodman
  Michael Jordan
  Scottie Pippen

*/