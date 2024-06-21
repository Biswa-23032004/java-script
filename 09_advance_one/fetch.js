// FETCH METHOD

// In JavaScript, the fetch() method is used to request data from a server. 

// It provides a more efficient and powerful way to retrieve data from servers compared to older techniques, such as the XMLHTTPRequest()

// The request can be of any type of API that returns the data in JSON or XML.

// Example


async function getUser() {
    try {
        const response = await fetch("https://api.github.com/users/Biswa-23032004")
        // fetch is now days  is known as  a object.

        const data =  response.json() 
          

        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}

getUser()

// Promise { <pending> }

// So what is happening is the fetch method usually give the response in time, as if we print the "getUser()" 

// But it is pending or taking time because  to convert it into the json.

// what should we do is to await the json data as well

async function getUser() {
    try {
        const response = await fetch("https://api.github.com/users/Biswa-23032004")
        // fetch is now days  is known as  a object.

        const data = await response.json() 
          

        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}

getUser()

// It is giving the json object.


// let us use the fetch with .then()  .catch format.

fetch("https://api.github.com/users/Biswa-23032004")

// A fetch() promise does not reject on HTTP errors (404,etc) it is only retun as response.

.then((response) => {
    return response.json()
})   //chaing way or for fun thening way
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// NOTE: values are printed first ( it has to be next by next)
// If The reason is function wait  1 second for promise 
// But it is lastly writen while the previous code is exicuted in that time in serialwise

// it return the json object
