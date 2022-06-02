interface Order
{
    [0]:number,
    [1]:string

}

function updateInventory(a:any[], b:any[]) 
{
    b.forEach( ([extraQuantity,itemName],index)=>
    {
        const found = a.findIndex(([,oldItemName])=>
        {
            console.log(itemName,oldItemName)
            return itemName.toLowerCase()==oldItemName.toLowerCase()
        });
        console.log(found)
        if(found> -1)
        {
            // console.log('Duplicate',a[found])
            a[found][0]+=extraQuantity;
        }
        else
        {
            // console.log('Nope',b[index])
            a.push(b[index]);
        }
        // console.log('~')
    })
    console.log('Finally...');
    console.log();
    return a.sort((left,right)=>
    {
        console.log(left[1]>right[1])
        return (left[1]>right[1]?1:-1);
    })
    // const alpha = a.sort((left,right)=>le)
}

// Example inventory lists
var curInv = 
[
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = 
[
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);