
const a = [1,2,3];
const newA = a.reverse(); //mutates the array
console.log(a);
console.log(a===newA); //true


//Example 2 - Reversing an array-like
//Not so well understood
//Seems like needs the "length" property present
//Doesn't seem to work with strings.
const alpha = {0: 1, 1: 2, 2: 3, length: 3};

console.log(alpha); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(alpha); //same syntax for using apply()

console.log(alpha); // {0: 3, 1: 2, 2: 1, length: 3}
