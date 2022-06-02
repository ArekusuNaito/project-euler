// Root
// https://www.freecodecamp.org/learn/coding-interview-prep/#algorithms
// 1. Problem
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
function symetricDelta(...args) {
    if (args.length > 1) {
        let delta = new Set();
        let a = args.shift();
        let b = args.shift();
        //
        deltaCheck(a, b, delta);
        deltaCheck(b, a, delta);
        console.log('--');
        while (args.length > 0) {
            a = Array.from(delta);
            b = args.shift();
            delta = new Set();
            deltaCheck(a, b, delta);
            deltaCheck(b, a, delta);
            console.log('--');
        }
        return Array.from(delta);
    }
    else {
        return [];
    }
    function deltaCheck(a, b, delta) {
        console.log('a', a, 'b', b);
        a.forEach(element => {
            if (!b.some(index => element == index)) {
                delta.add(element);
            }
            //else, we could manipulate the array to iterate less
            //todo -- improvement
        });
        console.log('a delta b is:', delta);
        return delta;
    }
}
const delta = symetricDelta([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
console.log(delta);
//# sourceMappingURL=index.js.map