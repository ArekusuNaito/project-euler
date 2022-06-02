const a = [1,2,3,4,5,6,7,8,9];
//number 6 index = 5 - target
    //index at which to start copying elements from
//number 2 index = 1 - start
//We are copying 3 elements.
//Index 1+3 = 4 = end 
//Remember:
//copyWithin copies up to but NOT INCLUDING end
//This means that the "4" index (number:5) won't be copied
//We will copy from number 2 to 4.
a.copyWithin(5,1,4);
console.log(a);
