// Root
// https://www.freecodecamp.org/learn/coding-interview-prep/#algorithms
// 1. Problem
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
function symetricDelta(...args) {
    if (args.length > 1) {
        let delta = new Set();
        let a = Array.from(new Set(args.shift()));
        let b = Array.from(new Set(args.shift()));
        let foo = 0;
        a.forEach((element, index, original) => {
            foo++;
            const foundIndex = b.findIndex(number => number == element);
            if (foundIndex > 0) {
                original.splice(index, 1);
                original.push(a[index]);
                b.splice(foundIndex, 1);
            }
        });
        console.log(a);
        b.forEach((element, index, original) => {
            const foundIndex = a.findIndex(number => number == element);
            if (foundIndex > 0) {
                original.splice(index, 1);
                original.push(b[index]);
                a.splice(foundIndex, 1);
            }
        });
        return [a, b];
    }
    else {
        return [];
    }
}
const delta = symetricDelta([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
console.log(delta);
//# sourceMappingURL=method3.js.map