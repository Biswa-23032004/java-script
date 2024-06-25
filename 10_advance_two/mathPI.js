
// Object.getOwnPropertyDescription

// The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property(hidden properties of an object) on a given object 
// And these property of an object are not in the object's prototype chain.


console.log(Math.PI);
/*3.141592653589793 */

// can we change value of PI by se it to-
Math.PI = 5
console.log(Math.PI);
/*3.141592653589793 */
// why it is not change 

// let dive into behid scene 

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// Let us see the value of descriptor

console.log(descriptor);

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// As we can see there are some of the hard coded property of the object is there.
// Which is writable,enumerable,configurable all set to false
// So we cant change the value of that object due to those unchangable property.

const User = {
    userName: "Sourav",
    password: "5678",
    isLoggedIn: "true"
}

console.log(User); // { userName: 'Sourav', password: '5678', isLoggedIn: 'true' }

//let us check the hidden properties of this object

console.log(Object.getOwnPropertyDescriptor(User,"password"));
/*
{ value: '5678',
writable: true,
enumerable: true,
configurable: true }
*/

// as we can see the hidden property and all set to true

// Can we change the properties value of our customize object

// Here it comes with Object.defineproperties(){}

 // The Object.defineProperties() static method defines new or modifies existing properties directly on an object.

 // so it takes three parameters such as object, its property and it modifications

 Object.defineProperty(User,"password",{
    writable:false,
    enumerable:false

 })

 console.log(Object.getOwnPropertyDescriptor(User,"password"));


/* {
  value: '5678',
  writable: false,
  enumerable: false,
  configurable: true
}
  */

// Let itrate the object

// for (let [key,value] of User) {
//     console.log(`${key} : ${value}`);
// }

//It says object is not iterable , the reason can be of many reasons
// So to iterate it we have to use Object.entries() instead of the object

for (let [key,value] of Object.entries(User)) {
    console.log(`${key} : ${value}`);
}

/*
userName : Sourav
isLoggedIn : true
*/