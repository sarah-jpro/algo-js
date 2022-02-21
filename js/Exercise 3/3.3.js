//Write a program that will create a duplicate of a given array.

//make a first version that will only do it using push()
let arr = [1,2,3,4,5];
arr.push(1,2,3,4,5)
console.log(arr);

let y = [1,4,5];
let y_clone = [...y];
y_concat = y.concat(y_clone);
console.log(y_concat);
