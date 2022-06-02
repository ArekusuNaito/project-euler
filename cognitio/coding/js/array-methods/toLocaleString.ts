//Currency example
var prices = ['￥7', 500, 8123, 12];
const singleString = prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });


console.log(singleString)
//=> ￥7,￥500,￥8,123,￥12  

//Date example
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary