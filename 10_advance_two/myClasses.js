// After ES6

class User {
        // when a object initialize from class in thet time automatically constructor will be called.
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