

// You're running a pool of servers where the servers are numbered sequentially starting from 1. 
//Over time, any given server might explode, in which case its server number is made available for reuse.
// When a new server is launched, it should be given the lowest available number.

// Write a function which, given the list of currently allocated server numbers, 
//returns the number of the next server to allocate.
// In addition, you should demonstrate your approach to testing that your function is correct. 
//You may choose to use an existing testing library for your language if you choose, or you may write your own process if you prefer.

// For example, your function should behave something like the following:

// >> next_server_number([5, 3, 1])
// 2
// >> next_server_number([5, 4, 1, 2])
// 3
// >> next_server_number([3, 2, 1])
// 4
// >> next_server_number([2, 3])
// 1
// >> next_server_number([])
// 1







function nextServerNumber(serverPool)
{
    var smallestNumber = 1;
    var checkedSet = {};
    //Note: I'm aware that this function is using a function not declared in its scope.
    //This is, checked set. This is not a pure function.
    function checkConsecutive(nextNumber)
    {
        if(! (nextNumber in checkedSet))
        {
            //This is the one we are looking for!! We return this one! 😊
            return nextNumber;
        }
        else 
        {
            //If not then look for the next one
            return checkConsecutive(nextNumber+1)
        }
    }
    //Iterate ONCE all the array to find the smallest number
    serverPool.forEach(currentServerID=>
    {
        if(!(currentServerID in checkedSet))//not on my grasp? Lets consider it
        {
            checkedSet[currentServerID]=1;
        }
        else
        {
            checkedSet[currentServerID]++;
        }
        //We still look for the smallest number
        if(currentServerID<smallestNumber)
        { 
            smallestNumber=currentServerID;
        }
    })

    //The smallest number will be our starting point to look for it recursively

    //
    if(!(smallestNumber in checkedSet)) //Is the smallest
    {
        // console.log("No lo tenia, deja te mando este ",smallestNumber,checkedSet[smallestNumber]);
        return smallestNumber;
    }
    else
    {
        return checkConsecutive(smallestNumber+1);
    }
    
}




// console.log(nextServerNumber([5,3,1]))
// console.log("####");
// console.log(nextServerNumber([5,4,1,2]))
// console.log("####");
// console.log(nextServerNumber([3,2,1]))
// console.log("####");
// console.log(nextServerNumber([2,3]))
// console.log("####");
// console.log(nextServerNumber([]))
// console.log("####");
console.log(`The next server ready is: ${nextServerNumber([5,3,1])}`);
console.log(`The next server ready is: ${nextServerNumber([5,4,1,2])}`);
console.log(`The next server ready is: ${nextServerNumber([3,2,1])}`);
console.log(`The next server ready is: ${nextServerNumber([2,3])}`);
console.log(`The next server ready is: ${nextServerNumber([])}`);
