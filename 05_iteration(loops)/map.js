//MAP

// The Map object holds key-value pairs and remembers the original insertion order of the keys.

// Any value like all the primitive datatypes and object can be the value of the "valu"e and "key" keyword.

// It doesnot store repeated values .


// Map()  method usualy known for the unique value we can not enter the repeated value also it follows the order


let PC = new Map()

// set() method

PC.set('Desktop',"samsung")
PC.set('mouse',"Dell")
PC.set('keyboard',"Hp")
// Wecan add ellement to the map using set() method

console.log(PC);

//  process of using loops in map method
for (const [system, value] of PC) {
    console.log(system,'-:', value);
}










