// control_flow to control the code not to exicute every tim.

const isUserLoggedIn = true
const temperature = 42

if ( temperature === 40 ){
    console.log("less than 52");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
// operators -
// <, >, <=, >=, ==, !=, ===, !==

//---------------------------
const mark= 300

if(mark > 200){
    let gift = "Chocolate"
    console.log(`Student has: ${gift}`);
} 

// console.log(`Student has: ${gift}`);

//-----------------------------------

const balance = 200
//implicit scope (no scope) after if condition
// if(balance > 50) console.log("conform"), console.log(" conform") ;//wrong way write second line after ','

if (balance < 500 ){
    console.log("Your balance is less than 500");
} else if (balance < 700 ){
    console.log("Your balance is less than 700");
} else if (balance < 900 ){
    console.log("Your balance is less than 900");
} else {
    console.log("Your balance is less than 1100");
} 
 
//------------------------------

const userLoggedin = true
const paid = true
const loggedInFromEmail = false
const loggedInFromGithub = true

// && - check all condition are true.
if (userLoggedin && paid && 2==3){
    console.log("Access the course");
}

// || - check any of the conditions are true
if (loggedInFromEmail || loggedInFromGithub){
    console.log("Access the course");
}



