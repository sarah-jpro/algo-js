const  readlineSync  =  require ( "readline-sync" ) ;

let userName = readlineSync.question("What's your name?");
let firstName = readlineSync.question("what's your firstName?");
let city=readlineSync.question("What's your city?");

console.log("your name is "  + userName  + firstName  + "and you live in" + city);
