// Root
// https://www.freecodecamp.org/learn/coding-interview-prep/#algorithms
// 1. Problem
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
export {};

function symetricDelta(...args):any[]
{
    if(args.length>1)
    {
        function deltaCheck(a:Set<any>,b:Set<any>)
        {
            for(let element of a)
            {
                if(b.has(element))
                {
                    a.delete(element);
                    b.delete(element);
                }
            }
        }
        
        let a = new Set(args.shift());
        let b = new Set(args.shift());
        deltaCheck(a,b);
        let delta = new Set<any>([...Array.from(a),...Array.from(b)]);
        while(args.length>0)
        {
            a = delta;
            b = new Set(args.shift());
            deltaCheck(a,b);
            delta = new Set<any>([...Array.from(a),...Array.from(b)]);
        }
        
        
        return Array.from(delta);
        
    }
    else
    {
        return [];
    }

    return []
}


const delta = symetricDelta([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);

console.log(delta);