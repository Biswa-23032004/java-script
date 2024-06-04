let allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = allNums.map( (num) => {
    return  num + 10
} )
console.log(newNums);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

// chaining :

// we can use multiple method at once.
// .map().map().filter()

let newNumbs = allNums.map( (num) => num * 10 ).map( (num) => num + 10 ).filter( (num) => num >= 40 )
console.log(newNumbs);

