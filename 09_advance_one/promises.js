// What is promise in javascript?

// "producing code" is the code that take some Time.

// "consuming code" is the code that must wait for the result.

// A "Promise" is an object that links the producing code and consuming code.

// javascript promise is an object of 3 states.

// pending ====> While a Promise object is "pending" (working), the result is undefined.

// fulfilled ====> When a Promise object is "fulfilled", the result is a value.

// rejected ====> When a Promise object is "rejected", the result is an error object.

// There was a library called blurbird which was compose of promises and other asychronous features and it was integrated with ES6 later on.

// Here is how to use a Promise:

// Ex :- 1

const promiseOne = new Promise( function (resolve,reject) {
    // Do an async code
    // Example of realworld application :---> Db calls,cryptography, network
    
    // "new" keyword used to creat an instance of a user-defined object type and a construtor function.

    setTimeout(() => {
        console.log("The programe is executed");
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log("yes the Execution is completed");
})

// The programe is executed
// yes the Execution is completed

// resolve() as a parameter and resolve() as a method has directly connected to then()
// The then() is consuming part of the promise
// The then() will be excuted once the resolve() method is call in the callback function of the promises producing part.

//Ex :- 2


//The promise object can be run without stored it in a variable.which brings chaining code

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
    

}).then(() => {
    console.log("Async task 2 resolved.");
})

/*
Async task 2
Async task 2 resolved.
*/

// Ex :- 3

const newUser = {
    userName : "harry",
    email : "harry@gmail.com",
    age : 19
}

// Now we can also pass the pre-created object or object from server data in the resolve.

const theUser = new Promise((resolve,reject) => {
setTimeout(() => {
    console.log("The user information :-");
    resolve(newUser)
},1000)
})

theUser.then((user) => {
    console.log(user);
})
/*
The user information :-
{ userName: 'harry', email: 'harry@gmail.com', age: 19 }
*/

// Ex :- 4

const mobilePhone = {
    "Expensive" : "Iphone",
    "Budget" : "Realme",
    "Cheper" : "Lava"
}

new Promise((resolve,reject) =>{
setTimeout(() => {
console.log("Mobile phone expensses");
resolve(mobilePhone)
},1000)

}).then((Phones) => {
    console.log(`Santosh has a ${Phones["Expensive"]}`);
    console.log(`Milan has a ${Phones["Budget"]} Phone`);
    console.log(`Sagar has a ${Phones["Cheper"]} Phone`);
})

/*
Mobile phone expensses
Santosh has a Iphone
Milan has a Realme Phone
Sagar has a Lava Phone
*/

// Ex :- 5

new Promise((resolve,reject) =>{
let errorone = true
if (!errorone) {
    resolve({userName : "Rahul" , age : 22})    
} else {
    reject('ERROR: Something went wrong')
}
}).then((err) => {
    console.log(err);
    return err.userName
}).then((newUser) => {      // So here if we use the return keyword then it will store the return value. For that, we have to create another then() like chaining way. Like this way
    console.log(newUser);
}).catch((err2) => {
    console.log(err2);
}).finally(() => console.log("The promise is either resolved or rejected"))
// The code in the finally() defines the end message irrespective of the results.

/*
ERROR: Something went wrong
The promise is either resolved or rejected
*/
// The catch() method provides a callback.

// The callback is a function to run when a promise is rejected.

//check while false value
new Promise((resolve,reject) =>{
    let errorone = false
    if (!errorone) {
        resolve({userName : "Rahul" , age : 22})    
    } else {
        reject('ERROR: Something went wrong')
    }
    }).then((err) => {
        console.log(err);
        return err.userName
    }).then((newUser) => {
        console.log(newUser);
    }).catch((err2) => {
        console.log(err2);
    }).finally(() => console.log("The promise is either resolved or rejected"))
    // The code in the finally() defines the end message irrespective of the results.

    /*
    Rahul
    The promise is either resolved or rejected
    */

    
// There is another way to execute the program with async and await methods

// specially it prefer async awaits while dtdbase connection.

// But it does not have the catch() or similar type of method where it can catch the error

// Once the response is there the code will be executed

// "async and await make promises easier to write"

// "async" makes a function return a Promise

// "await" makes a function wait for a Promise

const promiseTwo = new Promise((resolve,reject) => {
    let error = true
if (!error) {
    resolve({userName : "Rahul" , password : "1234"})    
} else {
    reject('ERROR: Javascript went wrong')
}
})

async function consumepromiseTwo() {
    try {
        const response = await promiseTwo
        console.log(response);  
    } catch (error) {
        console.log(error);
        // gracefully error handel from rejection value
    }
}
consumepromiseTwo()
/*
ERROR: Javascript went wrong
*/











