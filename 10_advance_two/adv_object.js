function multipleBy4(num){
    return num*5
}

multipleBy4.power = 3

console.log(multipleBy4(6));
console.log(multipleBy4.power);
console.log(multipleBy4.prototype); //{}

// in the javascript funtion stored as a function also , function stored as a object.

// Reason javascript is prototypable in heritance ad every time it  end of with object.

// prototype of object is null.


function creatUser(userName, score) {
    this.userName = userName
    this.score = score
}

// lets check function with prototype

creatUser.prototype.increment = function () {
    this.score++    
}
creatUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
}

const math = new creatUser("sagar", 75)
// impotance of "new" keyword
const science = creatUser("Suman", 80)

math.printMe() // Score is 75


// "new" keyword functionality

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/