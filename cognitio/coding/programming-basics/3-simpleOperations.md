Now that we can manipulate text output and declare variables. (Think as the word `declare` as "create" variables). We can also do operations with these variables.
For example, we are going to do some basic math variables.

```js
let number1 = 5;
let number2 = 10;

let sumResult = number1 + number2; //5+10
let subResult = number1 - number2; // 5-10
let multiplicationResult = number1 * number2; //We use the '*' as the multiplication symbol
//5*10 = 50
let divisionResult = number1 / number2; //5/10 = 0.5

//Up to this point we have just made the operation, not the user or programmer see this
//However we will now print the result.

console.log(`${number1} + ${number2} = ${sumResult}`)
console.log(`${number1} - ${number2} = ${subResult}`)
console.log(`${number1} * ${number2} = ${multiplicationResult}`)
console.log(`${number1} / ${number2} = ${divisionResult}`)

//Output
// 5 + 10 = 15
// 5 - 10 = -5
// 5 * 10 = 50
// 5 / 10 = 0.5

```

Notice how when we are logging, all spaces we write are taking into consideration.

We can also do the operations _on the fly_ inside of the logging function. We are pretty much doing the operation inside the logging.

```js
let number1 = 5;
let number2 = 10;

console.log(`${number1} + ${number2} = ${number1+number2}`)
console.log(`${number1} - ${number2} = ${number1-number2}`)
console.log(`${number1} * ${number2} = ${number1*number2}`)
console.log(`${number1} / ${number2} = ${number1/number2}`)

```

As you can see, this way we don't have the need to declare a variable for something as simple as logging. The common use case for declaring variables its because you will use them in multiple places inside your code. In this case we are just using it once, so we can do a simple "_on the fly_" operation.

