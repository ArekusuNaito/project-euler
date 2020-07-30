

function jumpingClouds(path)
{
    var jumpCount = 0;
    var index = 0;
    var steps = [0];
    while(index<path.length-1)
    {
        if(path[index+2]==0)
        {
            index+=2;
            steps.push(index)
            jumpCount++;
        }
        else if(path[index+1]==0)
        {
            index+=1;
            steps.push(index)
            jumpCount++;
        }
        
    }
    //Observation: (steps.length - 1)  == jumpCount  as well
    console.log(`Steps: [${steps}] ~ Jump Count: ${jumpCount}`);
}


jumpingClouds([0,0,1,0,0,1,0]);
jumpingClouds([0,1,0,0,0,1,0]);
jumpingClouds([0,0,0,0,1,0]);

