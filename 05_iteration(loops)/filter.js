const subjects = ["Geography","science","english","history","math"]

const materials = subjects.forEach( (items) => {
    // console.log(items); 
     return items
})
console.log(materials); /*undefined */

// foreach() do not return any value

// filter() method

// in this method it always return the values

// Also when use arrow function while opening the {} scope have to write return keyword to return the value

const allNums = [1, 2, 3, 4, 5, 6, 7]

const newNums = allNums.filter( (num) => {
    return num > 4
} )

// using foreach method
allNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);



