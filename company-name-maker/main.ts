const letterA = getCharCode('A')
const letterZ = getCharCode('Z');
//


const HAL = Array.from("CTR").map(letter=>
{
    const code = getCharCode(letter);
    return {letter:letter,previous:code-1,value:code,next:code+1}
    
})

HAL.forEach(data=>
{
    console.log(String.fromCharCode(data.previous),String.fromCharCode(data.value),String.fromCharCode(data.next))    
})



function getCharCode(char)
{
    return char.charCodeAt(0);
}