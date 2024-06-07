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
    })
})