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

const burger = food.findIndex(element=>element.name=='🍔');
console.log(burger);