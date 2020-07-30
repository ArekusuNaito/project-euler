function repeatedString(magicWord,n)
{
    var a = 0;
    //How many As are in a "clean" non-repeat magic Word
    for(var magicIndex in magicWord)
    {
        var letter = magicWord[magicIndex];
        if(letter.toLowerCase()=='a')a++;   
    }
    var repeatTimes = Math.floor(n / magicWord.length);
    var remaining = n % magicWord.length;
    var missingA=0
    //Then we just count how many from the remainer we can 
    for(var index=0;index<remaining;index++)
    {
        var letter = magicWord[index];
        if(letter=='a')missingA++;
        
    }
    var total = repeatTimes*a+missingA;
    console.log(total)
}

repeatedString("aba",10);
repeatedString("a",1000000000000);
repeatedString("aba",1);