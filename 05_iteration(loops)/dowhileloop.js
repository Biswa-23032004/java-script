// While Loop

// The While loop loops through a block of code as long as a specified condition is true

let i = 0
while (i <= 10) {
    console.log(`Value of index is ${i}`);
    i = i + 2
}
// Value of index is 0
// Value of index is 2
// Value of index is 4
// Value of index is 6
// Value of index is 8
// Value of index is 10

let myArray = ["apple","banana","cake"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value of arr is ${myArray[arr]}`);
    arr = arr + 1
}
// Value of arr is apple
// Value of arr is banana
// Value of arr is cake

// Do While Loop

// This loop is a variant of While loop, This loop will execute the code block once ,before checking if the codition is true, then it will repeat the loop as long as condition is true.

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while ( score <= 10);
/*
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10
*/ 