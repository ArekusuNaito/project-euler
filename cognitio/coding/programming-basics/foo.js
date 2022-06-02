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


let result;
//Next thing we are doing is that we will be using "Conditions"


if(operation == "add")result = number1+number2;
if(operation == "substract")result = number1-number2;
if(operation == "multiply")result = number1*number2;
if(operation == "divide")result = number1/number2;

if(result === undefined)result = "Invalid Operation"

console.log(`Operation Selected: ${operation}`)
console.log(`Operation Result: ${result}`)

//