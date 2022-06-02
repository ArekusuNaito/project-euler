const fruits = ['🍎','🍇','🍑','🍌','🍉','🥑','🍒'];
const slice = fruits.slice(3,6);
//We want 3 elements.
//First argument is the index of where to start
//Second argument is an endIndex (doesnt take into consideration the number)
//For this example:
//StartIndex - 3 (slice's beggining)
//EndIndex -6 (sliceEnd, without taking the index 6 value.)
//Useful to think as: Start on 3 and I need 3 more. 3+3=6

console.log(slice); //=>[ '🍌', '🍉', '🥑' ]