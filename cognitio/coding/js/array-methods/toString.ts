const pizzaArray = ['p','i','z','z','a'];
const pizzaWord = pizzaArray.join();
const pizzaWord2 = pizzaArray.toString();
console.log(pizzaWord2); //=>p,i,z,z,a
console.log(pizzaWord==pizzaWord2)

//Note: You can remove the commas using join('')
//Using an empty character