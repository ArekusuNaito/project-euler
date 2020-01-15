

function solutionFor(number=Number)
{
    const primeNumbers = findPrimes(10000);
    let originalNumber = number;
    let primeNumber = primeNumbers.shift();
    
    let factors = [];
    factorNumbers(primeNumber,number,[...primeNumbers],factors);
    console.log(`Factors are: ${factors} multiplied are ${factors.reduce((prev,current)=>prev*current)} ~ Largest Prime Factor: ${factors.pop()}`)
}

function findPrimes(endLimit) {

    return sieveOfEratosthenes(endLimit)

}

function range(startLimit, endLimit) {
    return Array.from(Array((endLimit - startLimit) + 1), (_, index) => {
        return startLimit + index
    })
}

function sieveOfEratosthenes(endLimit) {
    let primeNumbers = []
    let sieve = range(2, endLimit);
    let count = 0;
    while (sieve.length > 0) {
        let nextPrime = sieve.shift()
        primeNumbers.push(nextPrime);
        sieve = sieve.filter((value, index) => {
            return value % nextPrime != 0;
        });
    }
    return primeNumbers;
}

function factorNumbers(primeNumber=Number,currentNumber=Number,primeNumbers=[],factors=[])
{
    let leftovers = currentNumber % primeNumber;
    let quotient = currentNumber / primeNumber;
    if (quotient == 1)
    {
        factors.push(primeNumber);
        return;
    }
    else
    {
        
        if(leftovers==0)
        {
            factors.push(primeNumber);
            if(quotient!=1)
            {
                currentNumber=quotient;
            }
            
        }
        else
        {
            primeNumber = primeNumbers.shift();
        }
        factorNumbers(primeNumber, currentNumber, primeNumbers, factors);
    }
}


solutionFor(600851475143);