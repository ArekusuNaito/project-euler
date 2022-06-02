const a = [1,2,3,4,5,6,7,8,9];
//2 : our filling value
//1 : the index (inclusive) where we will start filling
//4 : the index (exclusive) where we will end filling
//If it's confusing, you can add "X" values to your start index and type that.
//For example, we want to fill 3 spaces.
//We do: 1+3 => 4 our
a.fill(2,5,8);
console.log(a);

//Using a static method

//Fill an array of size 9 with only the value: 2
const onlyTwos = Array(9).fill(2);
console.log(onlyTwos)