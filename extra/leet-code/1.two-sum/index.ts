

function twoSum(nums: number[], target: number): number[] 
{
    for(let index = 0; index<nums.length-1;index++)
    {
        const currentNumber = nums[index];
        const checkSet = nums.slice(index+1); 
        // const foundIndex = checkSet.findIndex(alpha=>alpha+currentNumber==target)
        for(let deepIndex=index+1;deepIndex<nums.length;deepIndex++)
        {
            const numberToCompare = nums[deepIndex];
            if(currentNumber+numberToCompare == target)return [index,deepIndex]
        }
        
    }
    return [-1,-1];
};


const indexes = twoSum([3,2,4],6);
console.log(indexes)