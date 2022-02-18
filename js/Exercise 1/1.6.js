const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question("Give me a number : ");
let secundNumber = readlineSync.question("Give me a other number : ");

console.log(firstNumber % secundNumber);