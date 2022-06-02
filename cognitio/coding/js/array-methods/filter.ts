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

//Let's filter this.
//Let's query only the fruits

const fruits = food.filter(currentFood=>currentFood.type=='Fruit');
console.log(fruits);