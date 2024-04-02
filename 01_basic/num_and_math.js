let balance = new Number(100)
console.log(balance)

// console.log(balance.toString().length);   // length is a property of string
// console.log(balance.toFixed(1));     //singlr digit after 100. 

const num = 100000
// console.log(num.toLocaleString('en-In')); 

// console.log(Math);
// console.log(Math.round(4.6));  
// console.log(Math.abs(-4));  
// console.log(Math.floor(5.9));  


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
// math formula for random-decimal-(+1)avoid 0 output

const num1 = 100
const num2 = 200

console.log(Math.floor(Math.random()*(num2 - num1 + 1)) + 1);
