//Inserting Febraury to the array - Mutating it
const months = ['January','March','May','December'];
months.splice(1,0,'Febraury');
//Now Febraury is index 1.
//=> [Jan:0,Feb:1,March:2,May:3,December:4]
//Inserting April
months.splice(3,0,'April');
console.log(months);


//Deleting may and december from the Array
//=> [Jan:0,Feb:1,March:2,April:3,May:4,December:5]
//Starting from May, we delete 2 entries.
months.splice(4,2);
console.log(months);

//Replacing/Updating Febraury with a new month.
//28 day months are not cool
//Replacing can be seen as...
//Delete Febraury then... Insert Chronember
months.splice(1,1,'Chronember');
console.log(months);