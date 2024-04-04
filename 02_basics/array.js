const newArr = [0,1,2,3,4,5,6]
const myFrnd = ["Hari","Shree"]

const newArr2 = new Array(1,2,3,4)
//it automatically Recive as array

// console.log(newArr[1]);
// console.log(myFrnd[1]);

// Array Methods:

const newArr3 = newArr.push(8)
// console.log(newArr);

const newArr4 = newArr.pop()
// console.log(newArr);

const newArr5 = newArr.unshift(9)
// console.log(newArr);

const newArr6 = newArr.shift()
// console.log(newArr);

// console.log(newArr.includes(4));
// console.log(newArr.indexOf(2));

console.log("Hari",newArr);

const myArr = newArr.slice(1,5)

console.log(myArr);
console.log("C",newArr);

const myArr2 = newArr.splice(1,5)
//splice change the main array
console.log(myArr2);
console.log("C",newArr);



