let fruits = ['🥑','🍒'];
fruits.unshift('🍇');

////Notice that these 2 values are in order: 🍎,🍏
//They are not in 🍏,🍎
fruits.unshift('🍎','🍏'); 
const finalLength = fruits.unshift('🍑');
console.log(finalLength); //=>6
console.log(fruits); //[ '🍑', '🍎', '🍏', '🍇', '🥑', '🍒' ]
