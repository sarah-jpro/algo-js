//Create a function named rand10() that returns a random integer between 1 and 10.
//Create a program that will display the result of that function each time it is run.

function rand10 (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var min = (1);
var max = (10);

console.log(rand10 (min,max));
