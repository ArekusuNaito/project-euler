const a = ['🍎','🍐','🍇'];
const fruitEntries = a.entries();

for(let entry of fruitEntries)
{
    console.log(`Index: ${entry[0]} => value: ${entry[1]}`);
}

fruitEntries.next()
// Index: 0 => value: 🍎
// Index: 1 => value: 🍐
// Index: 2 => value: 🍇