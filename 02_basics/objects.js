
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
console.log(users.fullName)

//another way is
console.log(users["fullName"])
 
// access a symbol
console.log(users[newSym])


