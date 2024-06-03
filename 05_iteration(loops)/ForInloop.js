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



