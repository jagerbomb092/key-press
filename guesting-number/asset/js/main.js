let random = Math.floor(Math.random() * 100)+1

let guesses = document.querySelector(".guesses")
let lastResult = document.querySelector(".lastResult")
let loworhigh = document.querySelector(".lowOrHi")

let guessesSubmit = document.querySelector('.guessSubmit')
let guessField = document.querySelector('.guessField')

let guessesCount = 1;
function checkGuess(){
    let userGuess = parseInt(guessField.value)
    
    if (!userGuess) {
        lastResult.textContent = 'Number only!'
        guessesCount = 0
        guesses.textContent = 'Previous guesses: '
    }
    guessField.value = '';
    if(guessesCount === 1) {
        guesses.textContent = 'Previous guesses: '
    }
    
    if (userGuess === random) {
        lastResult.textContent = 'Congratulations! You got it right!'
        lastResult.style.backgroundColor = 'green'
        loworhigh.textContent = ''
        gameOver ()
    }
    else if(guessesCount === 10){
        lastResult.textContent = '!!!GAME OVER!!!';
        gameOver();
    }
     else {
        lastResult.textContent = 'Wrong!'
        lastResult.style.backgroundColor ='red'
        if (userGuess < random) {
            loworhigh.textContent = 'too low!'
        } else if(userGuess > random){
            loworhigh.textContent = 'too high!'
        }
    }
    guesses.textContent += userGuess + ' '
    guessField.focus();
    guessesCount++
    console.log(guessesCount);
    
}
function gameOver (){
    guessField.disabled = true
    guessesSubmit.disabled = true
    resetButton = document.createElement('button')
    resetButton.className = 'abc'
    resetButton.textContent = "reset Game !"
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame)
    
}
function resetGame(){
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        let resetPara = resetParas[i];
        resetPara.textContent = ''
    }
    guessesCount = 1
    guesses.textContent = 'Previous guesses: '
    guessField.disabled = false
    guessesSubmit.disabled = false
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white'
    randomNumber = Math.floor(Math.random() * 100) + 1;
    resetButton.parentNode.removeChild(resetButton)
}
guessesSubmit.addEventListener('click',checkGuess)