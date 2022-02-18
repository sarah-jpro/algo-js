const  readlineSync  =  require ( "readline-sync" );

let min = readlineSync.question("Give me a number ");
let max = readlineSync.question("Give me a number ");
let content = readlineSync.question("Give me a number ");
    if ((content >= min) || (content <= max)) {
    console.log("ok");
    }
