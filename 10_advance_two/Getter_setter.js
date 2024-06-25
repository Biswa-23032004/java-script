// Getters

//A getter is a method that gets called when you try to access a property of an object.

//It allows you to execute some code before returning the property value.

// Getters are defined using the get keyword followed by the property name.

// Setter

// A setter is a method that gets called when you try to assign a value to a property of an object.

// It allows you to execute some code before setting the property value. Setters are defined using the set keyword followed by the property name.


class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value.toLowerCase()
    }

    get password(){
        return `${this._password}ASQ`;
    }

    set password(value){
        this._password = value
    }
}

const show =  new User("ASHIS@gamil.com","4536")
console.log(show.email);  // ashis@gamil.com
console.log(show.password); // 4536ASQ


// Another examples old syntax

// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }

// const chai = new User("chai@chai.com", "chai")

// console.log(chai.email);


// Another examples old syntax

// const User = {
//     _email: 'h@hc.com',
//     _password: "abc",


//     get email(){
//         return this._email.toUpperCase()
//     },

//     set email(value){
//         this._email = value
//     }
// }

// const tea = Object.create(User)
// console.log(tea.email);