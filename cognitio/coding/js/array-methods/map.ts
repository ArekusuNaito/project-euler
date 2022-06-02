const a = [1,2,3,4,5,6,7,8,9];
const a5 = a.map(currentValue=>currentValue*5);

console.log(a5);
//=> [5,10,15,20,25,30,35,40,45]

//Example 2. I only want the fruit emoji from my fruit array.

const food =
[
    {
        name:'🍎',
        type:"Fruit"
    },
    {
        name:'🍔',
        type:"Fast Food"
    },
    {
        name:'🍇',
        type:"Fruit"
    },
    {
        name:'🍰',
        type:"Dessert"
    },
    {
        name:'🌭',
        type:"Fast Food"
    },
    {
        name:'🍑',
        type:"Fruit"
    }
];

const onlyEmoji = food.map(element=>element.name);
console.log(onlyEmoji);