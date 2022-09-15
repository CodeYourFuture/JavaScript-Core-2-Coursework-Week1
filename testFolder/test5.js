let string1 = "you're braver than you believe, stronger than you seem, and smarter than you think";

let string2= /\byou\b/

console.log(string1.match(new RegExp(string2,"g")).length)