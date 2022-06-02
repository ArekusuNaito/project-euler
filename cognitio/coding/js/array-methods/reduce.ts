//Example 1. Get the average of test results.
//Using a simple for...each
//This is an imperative way to do this.
const results = [9,10,8,8,9,10,8,6,5,8,8,10,9,9]
const length = results.length;
let average = 0;
for(let number of results)
{
    average+=number;
}
average/=length;
console.log(`From ${length} results - Average is`,average)

//Example 2. Using reduce
//Regarding the reducer function
//previousvalue - the return from the previous call. 
//The first time it executes
let average2 = results.reduce((previousValue,currentValue)=>
{
    return previousValue+currentValue;
})
average2/=length;
console.log(`From ${length} results - Average is`,average2)