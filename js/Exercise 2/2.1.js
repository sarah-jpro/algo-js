const readlineSync = require("readline-sync");

let age = readlineSync.question("How old are you?");
    if (age >= 18) {
        console.log("You are a adult");
    }