let randomNumber = parseInt(Math.random() * 100 + 1) 

const submit     = document.querySelector('#subt')
const userInput  = document.querySelector('#guessField')
const guessSlot  = document.querySelector('.guesses')
const remaining  = document.querySelector('.lastResult')
const lowOrHi    = document.querySelector('.lowOrHi')
const startOver  = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess=[]
let numGuess =1

let playGame=true

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();// in order to not send to server.
        const  guess = parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number')
    }else if(guess < 1){
        alert('Please enter a Number greater than one')
    }else if(guess > 100){
        alert('Please enter a Number less than hundred')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            // if code is entering this if statement than the guess is still at 10 or less
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess===randomNumber) {
        displayMessage(`You guessed it right `)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is too low `)
    }else if(guess>randomNumber){
        displayMessage(`Number is too high `)
    }
}
// this function is used to clean the previously guessed number and increment the numGuess and reduce the remaining Number 
function displayGuess(guess) {
    userInput.value= ""
    guessSlot.innerHTML+=`${guess},`
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}<h2>`
}

function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id='newGame'> Start new Game </h2> `
    startOver.appendChild(p)
    playGame=false
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() * 100 + 1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    });
}
