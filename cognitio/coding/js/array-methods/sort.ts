//Example 1. Simple alphabetical sort

const randomLetters = ['n','o','a','c','j','u','m','e'];
const sortedLetters = randomLetters.sort();
//Default sorting type is ASCENDING.
//According to documentation:
//If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings 
//and comparing strings in UTF-16 code units order. 

console.log(sortedLetters)
// [
//     'a', 'c', 'e',
//     'j', 'm', 'n',
//     'o', 'u'      
// ]

//Example 2. Numeric sorting (and caveats)
const randomNumbers = [42,5,22,6,2];
const sortedNumbers = randomNumbers.sort();
console.log(sortedNumbers);
//=> [ 2, 22, 42, 5, 6 ]
//Wow! This doesn't look like its sorted numerically!
//This is because the default sorting function in Javascript, as mentioned before, converts them to Unicode.
//22 is before 5 and 6 in unicode, because they are string codes.


//Example 3. Actual way of Sorting numerically.
//To sort numerically (or in anyway) we must provide a compare function.
const randomBois = [42,5,22,6,2];
const sortedBois = randomBois.sort((a,b)=>
{
    //For simplicity:
    //If we want ASCENDING order we would do a-b : ASC
    //If we want DESCENDING order we would do b-a: DESC
    //---------
    //The function internally takes this into consideration (from b's point of view)
    //If the return value is 0 => they are equal -- nothing happens
    //If the return value is positive => b should be in a lower index (left) than a.
    //If the return value is negative => b should be in a higher index (right) than a.
    return b-a; //Descending sort
    
});
console.log(sortedBois);
