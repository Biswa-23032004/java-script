// Nested Scope

// In nested function or scope child function can access the variable of parent function. 

// For fun little sister can have ice cream from elder brother,but brother dont have ice craem from  the littel sister
// Examp:

function first() {
    let studentname = "bunty"

    function second() {
        let id = 123123123
        // console.log(studentname);
    }
    // console.log(id);

    second()

}
// first()

/*********** function declaration ********/

//discussed about hoisting
function one(num) {
    return num + 1

}
console.log(one(3)) //4
  
// while we declar the function as it is  and also call above the funtion? 
console.log(one(4))
function one(num) {
    return num + 1

} //5

//yes this work as same after a function of calling & executing that funtion.

//let the funtion stored as a variable then we execute and call the funtion and to see what happening?

console.log(two(5))
const two = function(num) {
    return num + 2

}

//error, cause here  the the function stored as a  variable also called an expreesion.

// and we know the variable are not recognised before its declaration.