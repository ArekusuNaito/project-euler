// export {};
let levelCount = 0;
function newRealities(path:any[],choices:any[],combinations:any[]):any
{
    levelCount++;
    if(choices.length > 0)
    {
        for(let index=0;index<choices.length;index++)
        {
            //Make a choice
            levelCount++;
            let cloneChoices = [...choices];
            const currentChoice = cloneChoices.splice(index,1)[0];
            path = [...path,currentChoice];
            newRealities(path,cloneChoices,combinations);
            levelCount--;
            console.log(currentChoice,cloneChoices,choices);
            // cloneChoices.unshift()
            path = [];
            
            // console.log("111111111");
        }
        return combinations;
    }
    else //Can't make more choices
    {
        console.log(`#############################`)
        // console.log(`End of the Road.`);
        // console.log(`Last Choice: ${path}`);
        // console.log(`Choices left now : ${choices.length}`);
        // console.log(`___`);
        combinations.push([...path]);
        return
    }
    
}

function Main()
{
    //FOR SOME REASON, THE DEBUGGER IS NOT UPDATING THE CODE?
    const colorString = 'rgb';
    const colors = colorString.split("");
    console.log(colors);
    console.log("↓ - Processing")
    let combinations = []
    combinations = newRealities([],colors,[]);
    console.log("~~~ Combinations ↓");
    console.log(combinations.length);
    console.log(combinations);
    //Finally, check with a regex if there's a duplicate combination.

}


// console.log("Hi!");
// Main();

function Alpha()
{
    function Backtrack(choices:any[],path:any[],combos:any[])
    {
        if(choices.length>0)
        {
            console.log(`Before new iterations... ${choices}`);
            for(let index=0;index<choices.length;index++)
            {
                let cloneArray = [...choices];
                let choice = cloneArray.splice(index,1)[0];
                console.log(`Pick: ${choice}`);
                path = [...path, choice];
                Backtrack(cloneArray,path,combos);
                // console.log('We back from Deepland: ',path,choices,(index+1<choices.length))
                // path.pop();
                // path.push(choice);
            }
        }
        else
        {
            combos.push(path);
            console.log("No choices left");
            console.log("##");
            return;
        }
        // console.log(path);
    }

    let combos:any[] = []
    Backtrack(['a','b','c'],[],combos)
    console.log(combos);
}

Alpha();
// const foo = [1,2];
// const choice = foo.splice(1,1);
// console.log(choice,foo);
