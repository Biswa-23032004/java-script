// Static class methods are defined on the class itself.

// We cannot call a static method on an object, only on an object class.

class User {
    constructor(name) {
        this.username = name;
    }

    password(){
        return "1234"
    }

     static hello() {
        console.log(`Hello ${this.username}`);
        }
}

const hars = new User("Hars")
//hars.hello() //hars.hello is not a function 

class Monitor extends User{
    constructor(name,Email){
        super(name)
        this.email = Email
    }
}

const Class = new Monitor("Imran","imran@gmail.com")

console.log(Class.password()); //1234
Class.hello() //Class.hello is not a function 