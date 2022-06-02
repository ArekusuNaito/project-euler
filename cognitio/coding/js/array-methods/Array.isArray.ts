Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

const set = new Set([1,1,2,3,4,4]);
console.log(Array.isArray(set));