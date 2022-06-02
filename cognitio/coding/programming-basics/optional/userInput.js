// This next thing we are going to learn is a bit tricky.
// Specially in Javascript. The idea is just to retrieve the User's Input from the keyboard
//However, you are only going to use this if you are planning to do a Console/Terminal App.
//You would probably end up using other methods to Input your app.
//Like using External files, then read them and proceed to use the date from those files

//While its not so straightforward in Javascript, it is simpler in other languages.
//For the sake of legibility and simplicity we are going to use an external package.
//A package is pretty much code from an external source that we will use and that it's not part
//of the basic Javascript functions

// First, go to the terminal and type the following:
// npm install prompt-sync
// Then we are going to import the "prompt-sync" package
const getInput = require('prompt-sync')(); //Don't pay too much attention to this at the moment.
//What's important is tht at we are getting the Module and using it now.
//The module is now usable, we name it "getInput" -- we are declaring something called a variable here

//Next we proceed to use the GetInput module to prompt the user for input
//In this case, the terminal will show 'What is your name?'
const givenName = getInput('What is your name? '); //Notice there's a space at the very end.

//If we want to show a variable there's multiple ways to do so
//In modern versions of Node you can use the ${ } syntax.
//Just like the previous program. We will just print to the terminal the message with our new input.
console.log(`Hey there ${givenName}`);