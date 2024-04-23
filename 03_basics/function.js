// function myfunction(num1,num2) {
//     console.log(num1*num2);    
// }

// myfunction(4,3)

function myfunction(num1,num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

let result = myfunction(1,2)
// console.log("Result :",result); 

function userLogin(username) {
    if (!username) {
        console.log("Pleas enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(userLogin()); 


// rest operater
function watchLater(...vdo1){
    return vdo1
}

// console.log(watchLater("dev","nature","food","education"));

/* */
/* object in a function*/

let user = {
    name: "syam",
    education: "Btech"
}

function object(newObject){
    // console.log(`username is ${newObject.name} and education is ${newObject.education}`);
}

object(user)

/* Array in Function */
let array = [20,30,10]

function newvalue(newarray) {
    return  newarray[2]   
}

// console.log(newvalue(array));
console.log(newvalue([20,30,10]));