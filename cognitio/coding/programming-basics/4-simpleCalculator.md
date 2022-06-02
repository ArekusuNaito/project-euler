Even though we have worked with very simple things, we can still create things with the basic knowledge we have.

for this exercise we are going to learn 1 new thing, conditionals, and use our previous knowledge. Variables, User Input and Message printing. The Goal is to let the user type 2 numbers and make an operation with them, from the 4 basic operations.




```js
//Don't forget to check if the package is installed
//type this on your terminal
//npm install prompt-sync
const getInput = require('prompt-sync')();
//By using our
let number1 = getInput(`What's the first number?`); 
let number2 = getInput(`What's the first number?`); 

//Transform the number from "string/word" to a number
//We do this by using a function in javascript called "Number()"
//In a general programming context, we call this "casting"
number1 = Number(number1);
number2 = Number(number2);

//Now we will prompt the user what operation they wanna do:

let operation = getInput(`What operation do you wanna do? (add/substract/multiply/divide): `);


let result; //heads up, this thing doesnt have an assigned value, the default value would be "undefined"


//Next thing we are doing is that we will be using "Conditions"

//You  might be wondering whats happening here.
//We are now learning new syntax.
//We are using a thing called Conditions.
// If Certain conditions fulfills...
// Then -> Execute that code
//The condition will be enclosed parenthesis. 



//If the operation the user types is literally "add", then we will proceed to add those 2 numbers. And the result will be inside the variable named `result`.
if(operation == "add")result = number1+number2;

//If the operation the user types is literally "substract", then we will proceed to substract those 2 numbers.
//And the result will be inside the variable named `result`.
else if(operation == "substract")result = number1-number2;
//If the operation the user types is literally "multiply", then we will proceed to multiply those 2 numbers.
//And the result will be inside the variable named `result`.
else if(operation == "multiply")
result = number1*number2;
//If the operation the user types is literally "divide", then we will proceed to divide those 2 numbers.
//And the result will be inside the variable named `result`.
else if(operation == "divide")result = number1/number2;

//As you can see, after the second condition, we are using the "else if" syntax, this is because these 4 Conditions are together and we want to check if one fulfills, or else if another one fulfills and so on...



//Finally, if the user doesnt input any of the 4 operations, LITERALLY.
//Then we will ask for a thing called "Undefined". Because the `result` variable was never manipulated
if(result === undefined)result = "Invalid Operation"

console.log(`Operation Selected: ${operation}`)
console.log(`Operation Result: ${result}`)

//
```

