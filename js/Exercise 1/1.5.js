const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question("Give me a number with a part of decimale : ");
let secundNumber = readlineSync.question("Give me a number with a part of decimale : ");

console.log(Math.trunc(firstNumber * secundNumber));


