const a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const b = a.flat();
console.log(a);
console.log(b); //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]


//Example 2 -- A third dimensional array
const alpha = [
    [1,2,3],
    [ [4],[5],[6]],
    [7,8,9]
];

const beta = alpha.flat(2);
console.log(beta);

//Example 3 -- Reduce+Concat
const alef = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const reduced = alef.reduce((previous,current)=>
{
    return previous.concat(current);
},[])

console.log('alef',reduced);