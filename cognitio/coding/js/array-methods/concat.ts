const a = [1,2,3];
const b = [4,5,6];
const c = a.concat(b);
//c => [ 1, 2, 3, 4, 5, 6 ]

// However, you can also do this.
const c2 = [...a,...b]; //Use of the Spread Operator
//c2 => [ 1, 2, 3, 4, 5, 6 ]