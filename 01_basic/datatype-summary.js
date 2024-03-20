//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//retun-type of Primitive-datatype
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

const score = 100                                  
const scoreValue = 100.3                           
                                                   
const isLoggedIn = false                           
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

//retun-type of Non Primitive-datatype
// Arrays  =>  object
// Function  =>  function
// Object  =>  object

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);