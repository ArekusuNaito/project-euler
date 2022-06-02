
let paths:any[] = [];
let currentPath:any[] = [];


let count = 0;
function gridPaths(x:number,y:number):number
{
    if(x==1 || y==1) 
    {
        return 1; //hmm... but we not counting
    }
    else
    {
        return gridPaths(x-1,y) + gridPaths(x,y-1);
    }
    
}


const numPaths = gridPaths(4,3);
console.log(numPaths);