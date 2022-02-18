const  readlineSync  =  require ( "readline-sync" );

let number = new Number (readlineSync.question("What's your favorite number?"));
while ((number!=42)) {
    let number = new Number (readlineSync.question("Are you sure?"));
    if (number==42) {
      console.log("GOOD");
      break;
    }
}
