
//# Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

//Although I added that the problem would be solved for this:
//Find the sum of all the multiples of [a,b,c...] below N.
//Given [a,b,c...] and N

solutionFor([5, 3], 1000);

function solutionFor(numbers=[],askedNumber=Number)
{
    
    const primeNumbers = findPrimes(askedNumber);
    //Send a clone, as it will be mutated
    const lcm = leastCommonMultipleFor([...numbers], primeNumbers);
    //How many multiples are between each number and our askedNumber
    //Eg. Between 3,5 and 10
    let multipleCount = numbers.map(currentNumber => Math.floor(askedNumber / currentNumber) );
    let sum=0;
    let duplicateMultiples={};
    numbers.forEach((currentNumber,numIndex)=>
    {
        for (let index = 0; index < multipleCount[numIndex]; index++) 
        {
            
            let currentSum = currentNumber * (index + 1);
            if (currentSum == askedNumber) continue; //Ignore the asked number, since it's BELOW
            sum += currentSum;
            if (currentSum % lcm == 0) 
            {   
                if(currentSum in duplicateMultiples)
                {
                    sum-=currentSum;
                }
                else
                {
                    duplicateMultiples[currentSum]=1;
                }
            }
            
        }
    })
    console.log(`For the numbers ${numbers} the sum of multiples for the asked number ${askedNumber} is ${sum}`);
}

//Not sure of what's the name of this method.
//But you your ending vector has to be all ones.
//Eg. For a vector of length 3, you have to get [1,1,1]
//Every time a prime number is divisible (as an integer), it will be considered as a prime factor
function leastCommonMultipleFor(numbers=[],primeNumbers=[])
{
    let primeFactors = [];
    let primeFactor = primeNumbers.shift();
    while(!numbers.every(currentNumber=>currentNumber==1) || primeNumbers.length!=0) 
    {
        
        let canBeFactorized = numbers.some(currentNumber => {
           return currentNumber != 1 && (Number.isInteger(currentNumber / primeFactor))
        });
        if(canBeFactorized)
        {
            
            primeFactors.push(primeFactor);
            numbers.forEach((currentNumber, index) => 
            {
                if (currentNumber != 1 && Number.isInteger(currentNumber / primeFactor))
                {
                    numbers[index] = currentNumber / primeFactor;
                }
            });
        }
        else primeFactor = primeNumbers.shift();
        
    }
    return primeFactors.reduce((prev, current) => prev * current)
}

//There are many other methods to get the LCM, such as the Euclidean Method, and even the Prime Factorization

function findPrimes(endLimit)
{
    
    return sieveOfEratosthenes(endLimit)    
    
}

function sieveOfEratosthenes(endLimit)
    {
        let primeNumbers = []
        let sieve = range(2, endLimit);
        let count=0;
        while (sieve.length > 0) 
        {
            let nextPrime = sieve.shift()
            primeNumbers.push(nextPrime);
            sieve = sieve.filter((value, index) => {
                return value % nextPrime != 0;
            });
        }
        return primeNumbers;
    }



function range(startLimit,endLimit)
{
    return Array.from(Array((endLimit-startLimit)+1), (_, index) => 
    {
        return startLimit+index
    })
}



