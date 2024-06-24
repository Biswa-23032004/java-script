// Class Inheritance

// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class:

// let give a Example-

// Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
    constructor(brand) {
        this.brand = brand;
    }
    company() {
        console.log(`I have a ${this.brand}`);
    }
}

class Model extends Car {
    constructor(brand, model){
        super(brand);
        //The super() method refers to the parent class.

        // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods
        this.model = model;

    }
    show(){
        console.log(`This is a ${this.model}`);
        
    }
}

const Cars = new Model("Toyota","SUPRA");

Cars.company() //I have a Toyota

Cars.show() //This is a SUPRA

const racers = new Car("Ford");

racers.company() //I have a Ford

console.log(Car === Model); 
//false

console.log(Car === racers); 
//false

console.log(Cars instanceof Model); 
//true

console.log(Cars instanceof Car); 
//true





