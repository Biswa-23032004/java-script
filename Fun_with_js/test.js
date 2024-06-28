// ARRAY

let myArr = []
// %DebugPrint(myArr)

// Types of ARRAY
// continious, Holey(hole in a Array)

// Optimization in Javascript is Types

// SMI (small integer)
// Packed element
// Double (float, string, function )

// In array we have different values which is called array element. In the process of optimization it will  different-different optimization from each other

// what ever we stored in array that should be string, number,somting else that is called as Array Elemnts

// In a Array ,optization s are different depeneds on the useCases Scenario bais

// let giving examples of different array types

const arrOne = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS(continious) : we call it packed because there is no hole in the array like this : const arr = [1, 2, ,,4, 5]

// also known as optimized Default array type. this is also best arraytype but in the array the element are restrictive only we can store numbers


arrOne.push(3.0)
// PACKED_DOUBLE_ELEMENTS

// its not change further if we stored other element instead of number


arrOne.push('7')
// PACKED_ELEMENTS 

arrOne[10] = 11
/* [ 1, 2, 3, 4, 5, 3, '7', <3 empty items>, 11 ] the empty items are itroducing hole in this array*/
// HOLEY_ELEMENTS

console.log(arrOne); //[ 1, 2, 3, 4, 5, 3, '7', <3 empty items>, 11 ]

console.log(arrOne.length); //11

console.log(arrOne[9]); //undefined  : when we try to access the empty items in this array

console.log(arrOne[17]); //undefined

// Let us see how array find the index values

// bound check
// if a hole present in array it check further
// hasOwnProperty(arrOne,9)
// hasOwnProperty(arrOne.prototype,10)
// hasOwnProperty(Object.prototype,10)

// Holes are very expensive in js

// Recomended: There is no hole on your array

const arrTwo = [1, 2, 3, 4, 5]
console.log(arrTwo[2]);  // 3

// array types on optimization priority ranking

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrayThree = new Array(3)
// just 3 holes.HOLEY_SMI_ELEMENTS
arrayThree[0] = '1' //HOLEY_ELEMENTS
arrayThree[1] = '2' //HOLEY_ELEMENTS
arrayThree[2] = '3' //HOLEY_ELEMENTS

const arrayFour = []
arrayFour.push('1') //PACKED_ELEMENTS
arrayFour.push('2') //PACKED_ELEMENTS
arrayFour.push('3') //PACKED_ELEMENTS


const arrayFive = [1, 2, 3, 4, 5]

arrayFive.push(Infinity)  // PACKED_DOUBLED
arrayFive.push(NaN)  // PACKED_DOUBLED

// for, for-of, forEach method to be used for Optimization
