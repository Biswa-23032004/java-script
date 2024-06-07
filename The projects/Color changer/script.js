const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function (event) {
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'purple') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;
        }

        // when we use switsh case for loop.

        // switch (event.target.id){

        //     case "grey":
        //     body.style.backgroundColor = event.target.id;
      
        //     // We could have written the thebody.style.backgroundColor = grey;
        //     // But writting in the above way makes the code more efficient and it is a good practice
        //     break;
      
        //     case "purple":
        //     body.style.backgroundColor = event.target.id;
        //     break;
      
        //     case "blue":
        //     body.style.backgroundColor = event.target.id;
        //     break;
      
        //     case "yellow":
        //     body.style.backgroundColor = event.target.id;
        //     break;
      
        //     default:
        //     break;
    })
})