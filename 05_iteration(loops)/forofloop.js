// for of 

// These are array specific loops

// The JavaScript for of loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

let arr = [ 1,2,3,4,5]

for (const num of arr) {
    console.log(`Numbers are ${num}`);
}
/*
Numbers are 1
Numbers are 2
Numbers are 3
Numbers are 4
Numbers are 5
 */

// we can alsomusing it in string

let wishes = "HELLO,WELLCOME"
for (const i of wishes) {
    console.log(`Each char is ${i}`);
}
/*
Each char is H
Each char is E
Each char is L
Each char is L
Each char is O
Each char is ,
Each char is W
Each char is E
Each char is L
Each char is L
Each char is C
Each char is O
Each char is M
Each char is E
*/

// let try the object using  forof loop
const myObject = {
    'math1':"Algebra",
    'math2':"Geometry"
}

for (const [key,value] of myObject) {
    console.log(key,'-:',value);
}
// myObject is not iterable here objects are not iterable