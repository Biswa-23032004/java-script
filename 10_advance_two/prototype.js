let userName = "Saswat    "
let usermail = "saswat@gmail.com"

// console.log(userName.trueLength);

// To make a method named truelength for cutting extra space on string value of above variable.

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
userName.trueLength()
/*
Saswat    
True length is: 6
*/

// As we know we can also directly find the length of by using this truelength() method
"Icecream".trueLength() 
/*
 Icecream
True length is: 8 
*/


let animals = ["Tiger","Elephant","Lion"]

let animalPower = {
    tiger: "18 hz",
    lion: "16 hz",
    elephant: "40 hz"
}

Object.prototype.hzpower = function(){
    console.log('hzpower present in all object');
}

animalPower.hzpower()  //hzpower present in all object

// what happen when we chech the power is present in array or not

animals.hzpower() //hzpower present in all object

// power is present in array, cause when we acces the higherecy and storethe property in object so it give the property ti array ,sting or function also


// check when when we set property with array is there property store in object or not

Array.prototype.highhzpower = function(){
    console.log('High hzpower is present');
}

animals.highhzpower()  // High hzpower is present

animalPower.highhzpower()  // TypeError: animalPower.highhzpower is not a function
// because when set the property with array then the property is not accesable by object.


//Inheritance:

// Every object has different instance they dont share avlue to each other but the properties are common for every object

const Leader = {
    assistant: "Avaialable",
    feddback: " good"
}

const worker = {
    laber: 600
}

const manager = {
    isAvailable: false
}

const supporter ={
    readyPlan: "yes",
    fulltime: true,
    __proto__: manager // acces the manger object
}
// when we try to link object to object

worker.__proto__ = Leader // acces Leader object with outside

// Modern sytax of linking two objects

Object.setPrototypeOf(manager,worker)



