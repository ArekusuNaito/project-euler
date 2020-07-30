
function sockMan(sockBox)
{
    var pairCheck = {}
    var pairCount=0;
    sockBox.forEach(sock => 
    {
        if(sock in pairCheck)
        {
            pairCheck[sock]++; 
            if(pairCheck[sock]%2==0)pairCount++; //They key 
        }
        else
        {
            pairCheck[sock]=1; //First time and we take it into consideration.
        }
    });
       

    console.log(pairCheck);
    return pairCount;
    
}



console.log(sockMan([1,2,2,1,3,2]))
console.log(sockMan([10,20,20,10,10,30,50,10,20]))
console.log(sockMan([1,1,3,1,2,1,3,3,3,3]))