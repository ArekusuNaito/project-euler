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

//We will print each food with their type.

food.forEach(entry=>
{
    console.log(`I am ${entry.name} and my type is: ${entry.type}`);
})

