//https://youtu.be/ngCos392W4w
function nonNegativeIntegers_Iterative(limit:number)
{
    let sum=0;
    for(let currentNumber=0;currentNumber<=limit;currentNumber++)
    {
        sum+=currentNumber;
    }
    return sum;
}

function nonNegativeIntegers_Recursive(current:number,sum:number):number
{
    if(current<=0)
    {
        return sum;
    }
    else
    {
        return nonNegativeIntegers_Recursive(current-1,sum+current);
    }
}

function nonNegativeIntegers_Recursive2(current:number):number
{
    if(current==0)return 0;
    else return current+nonNegativeIntegers_Recursive2(current-1);
}



const result = nonNegativeIntegers_Recursive(4,0);
const result2 = nonNegativeIntegers_Recursive(4,0);
console.log(result);
console.log(result2);