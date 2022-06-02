let levelCount = 0;
function newRealities(path, choices, combinations) {
    levelCount++;
    if (choices.length > 0) {
        for (let index = 0; index < choices.length; index++) {
            //Make a choice
            levelCount++;
            let cloneChoices = [...choices];
            const currentChoice = cloneChoices.splice(index, 1)[0];
            path = [...path, currentChoice];
            newRealities(path, cloneChoices, combinations);
            levelCount--;
            console.log(currentChoice, cloneChoices, choices);
            // cloneChoices.unshift()
            path = [];
            // console.log("111111111");
        }
        return combinations;
    }
    else //Can't make more choices
     {
        console.log(`#############################`);
        // console.log(`End of the Road.`);
        // console.log(`Last Choice: ${path}`);
        // console.log(`Choices left now : ${choices.length}`);
        // console.log(`___`);
        combinations.push([...path]);
        return;
    }
}
function Main() {
    //FOR SOME REASON, THE DEBUGGER IS NOT UPDATING THE CODE?
    const colorString = 'rgb';
    const colors = colorString.split("");
    console.log(colors);
    console.log("↓ - Processing");
    let combinations = [];
    combinations = newRealities([], colors, []);
    console.log("~~~ Combinations ↓");
    console.log(combinations.length);
    console.log(combinations);
}
// console.log("Hi!");
Main();
export {};
//# sourceMappingURL=3.no-repeats-please.js.map