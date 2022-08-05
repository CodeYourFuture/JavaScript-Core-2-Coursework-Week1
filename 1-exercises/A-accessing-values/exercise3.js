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
top1 = [
  basketballTeam.topPlayers[2],
  basketballTeam.topPlayers[0],
  basketballTeam.topPlayers[1],
];

// let text = "";
// for (let i = 0; i < top1.length; i++) {
//   text += basketballTeam.topPlayers[i];
// }

// let text2 = "";
// for (let i = 0; i < basketballTeam.topPlayers.length; i++) {
//   text2 += basketballTeam.topPlayers[i];
// }
// // ["Michael Jordan", "Scottie Pippen", "Dennis Rodman"],
// // console.log(basketballTeam.topPlayers[i]);
// console.log(text2);

console.log(top1[0]);
console.log(top1[1]);
console.log(top1[2]);
/* EXPECTED RESULT

  Dennis Rodman
  Michael Jordan
  Scottie Pippen

*/