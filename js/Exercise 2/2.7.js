const  readlineSync  =  require ( "readline-sync" );

let n =readlineSync.question ("Please enter a number ")
function getSum(n) {
    let m = 0;
    while (n > 0 || sum > 9) {
         if(n == 0) {
            n = sum;
            sum = 0;
         }
         sum = sum + n % 10;
         n = Math.floor(n / 10);
    }
}
let resultat = readlineSync.question("How many time to enter a new number?");

console.log(resultat);