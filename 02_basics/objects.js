
// Object.creat   this method called constructer method or singleton
//  const body= {}  --->this is object

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

console.log(users.greeting());
console.log(users.greetingtow());

