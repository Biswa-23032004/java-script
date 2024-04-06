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

// console.log("Hari",newArr);

const myArr = newArr.slice(1,5)

// console.log(myArr);
// console.log("C",newArr);

const myArr2 = newArr.splice(1,5)
//splice change the main array
// console.log(myArr2);
// console.log("C",newArr);


/* More array concepts*/


const my_heros = ["Ganesh ji","Hanuman ji","Prhlad Maharaj"]
const new_heros = ["Hari","Narayan"]

const all_heros = [...my_heros, ...new_heros]
// console.log(all_heros);

const allheros = my_heros.concat(new_heros)
// console.log(allheros);


const all2_heros = my_heros.push(new_heros)
// console.log(all2_heros);
// console.log(my_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(100,200,300));