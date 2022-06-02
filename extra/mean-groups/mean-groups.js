function meanGroups(inputArray)
{
    let means = []
    inputArray.forEach((row,index)=>
    {
        let mean = row.reduce((current,previous)=>current+previous,0) / row.length;
        let meanGroup = {mean,index};
        means.push(meanGroup);
    })
    // let original = [...original];
    // let sorted = means.sort((a,b)=>
    // {
    //     return a.mean-b.mean
    // });
    let newMap = {};
    means.forEach(value=>
    {
        if(!(value.mean in newMap))newMap[value.mean]=[];
        newMap[value.mean].push(value.index)
    })
    let sortedKeys = Object.keys(newMap).map(key=>parseFloat(key))
    sortedKeys.sort((a,b)=>a-b);
    let meanGroups = [];
    for(let key of sortedKeys)
    {
        console.log(key)
        meanGroups.push(newMap[key])
    }
    console.log('Output',meanGroups);

    console.log(newMap)
    // console.log('Sorted 1',result);

    return [];
}


meanGroups([
    [3,3,4,2],
    [4,4],
    [4,0,3,3],
    [2,3],
    [3,3,3],
])