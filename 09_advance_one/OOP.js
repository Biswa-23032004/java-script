// Object Literal
// An object literal is a list of name:value pairs inside curly braces {}.

// Ex :-

const user = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}
//Literally, this is  a object.

console.log(user.age);

// Object literal have the collection ,properties or methods

const userOne = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",

    getUserOneDetails: function () {
        // console.log(" Got user details from datbase");
        // console.log(`Username : ${this.age}`);
        console.log(this);
        }

}
console.log(userOne.age);
// console.log(userOne.getUserOneDetails());
console.log(this);  // {} global scope.

// Construter Function :

// It allows to make multiple instances one object or object literal
//Ex :- new

/*
const promiseOne = new Promise()
*/

// its also help to make new context 

function usertwo(Username, LoggInCount, IsLoggedIn ) {
    this.Username = Username
    this.LoggInCount = LoggInCount
    this.IsLoggedIn = IsLoggedIn

    return this
}

// const userThree = usertwo("Surya", 10, true)
// const userFour = usertwo("Rakesh", 20, false)
// its giving the over write the usertwo values so to solve this problem we use the "new" keyword as construter function
const userThree = new usertwo("Surya", 10, true)
console.log(userThree);
/*usertwo { Username: 'Surya', LoggInCount: 10, IsLoggedIn: true } */
const userFour = new usertwo("Rakesh", 20, false)
console.log(userFour);
/*usertwo { Username: 'Rakesh', LoggInCount: 20, IsLoggedIn: false } */

// when we use new keyword at first it creat an new object which in called as instance

// Step 1: creat a new object called instance

//step 2: construction function call cause of new keywordi t pack the all argument and give you

// step 3: all arguments iject with this keyword

// step 4: return value in the function

console.log(userThree.constructor);

/*[Function: usertwo] */

// the constructor property is the reference of userTwo


