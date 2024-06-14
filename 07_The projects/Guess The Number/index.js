let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true ;

// to check player avialable in the game or not.
if (playGame) {
    submit.addEventListener('click',function (event) {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });    
}

function validateGuess(guess) {
    // to chack the number is valid or not withconditions
    if (isNaN(guess)) {
        alert('Pleas enter a valid number');
    } else if (guess < 1) {
        alert('Pleas enter a number more than 1');
    } else if (guess > 100) {
        alert('Pleas enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if(numGuess > 10) {
            displayGuess(guess);
            displayMessage('Game over, Random number was ' + randomNumber );
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //To check the number is same, higher or lower than random value
    if (guess === randomNumber) {
        displayMessage('You guessed it right'); 
        endGame();   
    } else if (guess < randomNumber) {
        displayMessage('Number is too low') 
    } else if (guess > randomNumber) {
        displayMessage('Number is too high') 
    } 
}

function displayGuess(guess) {
// update the userinput value
userInput.value = '';
guesses.innerHTML += `${guess}, `;
remaining.innerHTML = `Remaining: ${10 - numGuess}`;
numGuess++;
}

function displayMessage(message) {
//show the value
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
//end the game
userInput.value = '';
userInput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML = '<h2 id = "newGame">Start new Game</h2>';
startOver.appendChild(p);
playGame = false;
startGame();
}

function startGame() {
// Start a new Game
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(event){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = 'Guesses: ';
    remaining.innerHTML = 'Remaining: 10';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    
    playGame = true;
});
}

// let randomNumber = parseInt(Math.random() * 100 + 1);

//         const submit = document.querySelector('#subt');
//         const userInput = document.querySelector('#guessField');
//         const guesses = document.querySelector('.guesses');
//         const remaining = document.querySelector('.lastResult');
//         const lowOrHi = document.querySelector('.lowOrHi');
//         const startOver = document.querySelector('.resultParas');

//         const p = document.createElement('p');

//         let prevGuess = [];
//         let numGuess = 1;

//         let playGame = true;

//         if (playGame) {
//             submit.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 const guess = parseInt(userInput.value);
//                 console.log(guess);
//                 validateGuess(guess);
//             });
//         }

//         function validateGuess(guess) {
//             if (isNaN(guess)) {
//                 alert('Please enter a valid number');
//             } else if (guess < 1) {
//                 alert('Please enter a number more than 1');
//             } else if (guess > 100) {
//                 alert('Please enter a number less than 100');
//             } else {
//                 prevGuess.push(guess);
//                 if (numGuess > 10) {
//                     displayGuess(guess);
//                     displayMessage('Game over, Random number was ' + randomNumber);
//                     endGame();
//                 } else {
//                     displayGuess(guess);
//                     checkGuess(guess);
//                 }
//             }
//         }

//         function checkGuess(guess) {
//             if (guess === randomNumber) {
//                 displayMessage('You guessed it right');
//                 endGame();
//             } else if (guess < randomNumber) {
//                 displayMessage('Number is too low');
//             } else if (guess > randomNumber) {
//                 displayMessage('Number is too high');
//             }
//         }

//         function displayGuess(guess) {
//             userInput.value = '';
//             guesses.innerHTML += `${guess}, `;
//             remaining.innerHTML = `Remaining: ${10 - numGuess}`;
//             numGuess++;
//         }

//         function displayMessage(message) {
//             lowOrHi.innerHTML = `<h2>${message}</h2>`;
//         }

//         function endGame() {
//             userInput.value = '';
//             userInput.setAttribute('disabled', '');
//             p.classList.add('button');
//             p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
//             startOver.appendChild(p);
//             playGame = false;
//             startGame();
//         }

//         function startGame() {
//             const newGameButton = document.querySelector('#newGame');
//             newGameButton.addEventListener('click', function (event) {
//                 randomNumber = parseInt(Math.random() * 100 + 1);
//                 prevGuess = [];
//                 numGuess = 1;
//                 guesses.innerHTML = 'Guesses: ';
//                 remaining.innerHTML = 'Remaining: 10';
//                 userInput.removeAttribute('disabled');
//                 startOver.removeChild(p);
//                 playGame = true;
//             });
//         }