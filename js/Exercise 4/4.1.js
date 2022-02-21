//Create a function named calcSurface that takes the length and width of a rectangle and returns its surface.
//Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. 
//That program must use the function you created.


const  readlineSync  =  require ( "readline-sync" ) ;

function calcSurface(length, width) {
    return length * width; 
}
var length = readlineSync.question("Enter a whole number for the length of your rectangle:");
        var width = readlineSync.question("Enter a whole number for the width of your rectangle:");





console.log("The area of your rectangle is: " + calcSurface (length, width));

