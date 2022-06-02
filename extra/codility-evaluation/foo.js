function checkMin(foo)
{
    
    // let foo = [11,1, 3, 6, 4, 1, 2];
    console.log(foo)
    let obj = {};
    let min = foo[0];
    let max = foo[0];
    foo.forEach(number=>
    {
        min = min<number?min:number;
        max = max>number?max:number;
        if(obj[number]===undefined)
        {
            obj[number]=true;
        }    
    })
    //
    console.log(obj,min)
    let thatOne = min;
     for(let index=min;index<(max-min)+1;index++)
     {
        
        if(obj[(index+1)]===undefined)
        {
            thatOne = index+1;
        }
     }

     return thatOne;
}




checkMin([1, 3, 6, 4, 1, 2])