//For in Loop

// forin loop using objects
let newObject = {
    veg: "Chilly Paneer",
    Nonveg: "FISH"
}

for (const key in newObject) {
    console.log('${key} item avialble ${newObject[key]}');
}   

// try array in forin loop
let grocery = ["rice","dal","besan","suji","sugar"]

for (const key in grocery) {
    console.log(grocery[key]);
} 

//MAP using ForInLoop

let PC = new Map()

PC.set('Desktop',"samsung")
PC.set('mouse',"Dell")
PC.set('keyboard',"Hp")

for (const key in PC) {
    console.log(key);
} // noting in result

// cause map() is not iteratable.
