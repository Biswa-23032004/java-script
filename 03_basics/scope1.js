//Scope

//Scope determined as accessability (visibility) of variables

//javascipt scpes such as:

// ES6 introduced two important new JavaScript keywords: let and const.

// These 2 keywords provide Block Scope in Javascript.

// Block Scope

// In this Scope variables declard inside a {} not outside using var and let keyword

if(true){
    let x = 4
    const y = 5
}
// console.log(x);  // not define

//var dont have block scope
//declaring var iside a {} ,it can accessing outside.so it will be avoided to use.

if(true) {
    var z = 5

}
// console.log(z); //5

//Local Scope

//variable declared inside a {} and also accessing in this scope

{
let a = 20
const b = 30
var c = 40

console.log(a);
console.log(b);
console.log(c);
}

//Local Scope is applicable for all keywords(let,var,const)

// *Function Scope

// Each function Creat a Scope

//variable declared inside a scope or the function is not accessible outside of the function

// Variables var,let,const all have functional Scope

function colddrinks() {
    let juice = "mango"
    
}
//console.log(juice); // juice is not defined

function colddrinks() {
    const soda = "spice-up"
    
}
// console.log(soda); // soda is not defined

function colddrinks() {
    const pani = "Nimbu-pani"
    
}
// console.log(pani); // pani is not defined


// *Global Scope

// variables declared globaly or outside can accessable inside or out side of a scope.

// let,const,var all variables have a global if they declared outside of a functiin or scope.

let a = "parroat";
const animal = "Tiger";
var insect = "bee";

{
    console.log(animal);
}
console.log(insect);