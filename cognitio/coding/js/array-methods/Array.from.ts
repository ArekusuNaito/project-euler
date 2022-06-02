//Here we have an array with duplicate fruits.
const manyFruits = ['🍎','🍐','🍎','🍇','🍐','🍎','🍎','🍇']
//We can add this to an array-like structure: A Set
//A set contains no duplicates, only unique items.
//However... it is needed to return an Array, not a Set.
//How do we do this?

const fruitSet = new Set(manyFruits);
console.log(fruitSet);
//=>Set(3) { '🍎', '🍐', '🍇' }

const uniqueFruits = Array.from(fruitSet);
//=> [ '🍎', '🍐', '🍇' ]


//Example 2
const a = [1,2,3,4];
const b = Array.from(a,number=>number*2);
console.log(b);