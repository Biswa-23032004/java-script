let user = {
    username : "sweta",
    number : 1234123412 ,

    welcomeMessage : function() {
        console.log(`${user.username} , welcome to the website`);
        // console.log(this);
    }

}

user.welcomeMessage() //sweta , welcome to the website

// this is used to access the values of current context on this Scope

// let change the value of username to:

user.username = "sakhi"

user.welcomeMessage() //sakhi , welcome to the website

//cause when we change the value of usarname , the cahnges in current context.

console.log(this); //{}
// cause nothing in the global object so it print as empty object

//** */ in the browser the global object is Windows object.***
 
//check the current context as THIS weather in the funtio work or not?

function move() {
  let move = "left"
  console.log(this.move)  
}
move() // undefined cause current context only work on object.

const direction = function () {
    let move = "left"
    console.log(this.move)  
  } // current context not working while store the function as a variable also.

// check 'this' in arrow function .

// const deirection = () => {
//     let move = "left"
//     console.log(this);
//   }

//   direction()

// implicit return

//t-1
let addnum = (a ,b) => a + b
console.log(addnum(1,8));

//t-2
let addnum2 = (a ,b) =>( a + b)
console.log(addnum2(1,8));

//Explicit return-
//t-3
let addnum3 = (a ,b) =>{
    return a + b
}
console.log(addnum3(1,8));
// t-1 , t-2 , t-3  are same.

// return a object we should used () to cover object ({})

let addnum4 = (a ,b) =>({key: 234})
console.log(addnum4(1,8));