const subjects = ["Geography","science","english","history","math"]

// callback function dont have its name

subjects.forEach(function (val) {
    console.log(val);    
})

//arrow function using foreach loop
subjects.forEach( (items) => {
    console.log(items);    
})

function resources(items) {
    console.log(items);    
}
// just giving reference of the function not to execute (resources()) the fun to print

subjects.forEach(resources)
/*
Geography
science
english
history
math
 */

// arrow function have the acces to item, index & full array of foreach loop
subjects.forEach( (items, index, arr) => {
    console.log(items, index, arr);    
})
/* 
Geography 0 [ 'Geography', 'science', 'english', 'history', 'math' ]
science 1 [ 'Geography', 'science', 'english', 'history', 'math' ]
english 2 [ 'Geography', 'science', 'english', 'history', 'math' ]
history 3 [ 'Geography', 'science', 'english', 'history', 'math' ]
math 4 [ 'Geography', 'science', 'english', 'history', 'math' ]
*/

// use objects in array [{},{},{}]

let graduation = [
    {
        degree: "B.tech",
        duration: 4
    },
    {
        degree: "B.sc",
        duration: 3
    },
    {
        degree: "B.com",
        duration: 3
    }
]

graduation.forEach( (items) => {
    console.log(items.degree);    
})
/*
B.tech
B.sc
B.com
*/