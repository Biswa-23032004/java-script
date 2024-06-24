// After ES6

// Use the keyword class to create a class.

// Always add a method named constructor():

// class ClassName {
//     constructor() { ... }
//   }

// Example
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }
// The example above creates a class named "Car".

// The class has two initial properties: "name" and "year".

// When you have a class, you can use the class to create objects:

// Example:
// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);

// The example above uses the Car class to create two Car objects.

// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method.


class User {
    // The constructor method is called automatically when a new object is created.
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}xyz`;
    }
    changeUsername(){
        return `${this.userName.toUpperCase()}`;
    }
}

const hero = new User("Rakesh", "rakesh@gmail.com", "7777")

console.log(hero.encryptPassword());
console.log(hero.changeUsername());

// Behind the Scen when we dont use class

// function User(userName, email, password) {
//     this.userName = userName
//     this.email = email;
//     this.password = password;
    
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}xyz`;
// }
// User.prototype.changeUsername = function(){
//     return `${this.userName.toUpperCase()}`;
// }


// const star = new User("Rakesh", "rakesh@gmail.com", "7777")

// console.log(star.encryptPassword());
// console.log(star.changeUsername());