
function getFibonnaciEvenSumFor(number)
{
    let series = [1,2]
    let previousNumber = series[0];
    let currentNumber = series[1]
    let sum=currentNumber; //2 as it's the first even
    for (let index = 0; index < number-2; index++) 
    {
        let nextNumber=previousNumber+currentNumber;//1+2=3, then 2+3=5, then 3+5=8
        previousNumber=currentNumber; //now previous is 2, now previous 3
        currentNumber=nextNumber; //now the current is 3,  now the current is 5
        if(nextNumber%2==0)sum+=nextNumber;
        series.push(nextNumber);
    }
    console.log(series);    
    console.log(sum);
    return sum;
}

getFibonnaciEvenSumFor(10);
getFibonnaciEvenSumFor(18);
getFibonnaciEvenSumFor(23);
getFibonnaciEvenSumFor(43);