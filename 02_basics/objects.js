
// Object.creat  ---> this method called constructer method or singleton
//  const body= {}  --->this is non singleton object
 
//------------Object Literal Method----------->

// when declaring a Symbol is [newSym]
const newSym =Symbol("Synch")

const users = {
    name:"Bunty",
    fullName : "Biswajit nayak",
    [newSym] : "Synch",
    newSym: "myKeee!",
    age: 20 ,
    location: "Bhubaneswar"
}

// when we access the Object in this Way
/* console.log(users.fullName) */

//another way is
/* console.log(users["fullName"]) */
 
// access a symbol
/* console.log(users[newSym]) */

users.name = "Bunty"
/* Object.freeze(users)  */   // freeze the object
users.name = "krsna"
// console.log(users);

// discusing functions
users.greeting = function(){
    console.log("see Taht code");
}
users.greetingtow = function(){
    console.log(`see That code, ${this.age}`);
}

// console.log(users.greeting());
// console.log(users.greetingtow());

// <----------object singleton Method----------->
 
// const instauser = new object()
//  singleton object

const instauser = {}
// Non singleton object

instauser.id ="qwerty1234"
instauser.name ="qwerty"
instauser.isloggedIn = false

// console.log(instauser);

// object under Object

const commonMan = {
    behaviour:{
        education:{
            Graduate:"yes",
            dependent:"No"
        }
    }
}
 
//Nesting the value use =.object

//commbaining the object

const obj1 ={1: "q", 2: "w", 3: "e"}
const obj2 ={4: "r", 5: "t", 6: "y"}

// const obj3 ={ obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(instauser);

// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));

// console.log(instauser.hasOwnProperty('id'));

//------>Object de-structure.

const shop = {
    verities: "friuts",
    price: "99/-",
    shopOwner: "Master"

}

const {shopOwner:Owner} = shop

// console.log(shopOwner);
console.log(Owner);

// --------->API JSON Concept

// ex like Object

// {
//     "name":"Sunil",
//     "education":"Graduate",
//     "skill":"Analyst"

// }

// example like Array

// [
//     {},
//     {},
//     {}
// ]