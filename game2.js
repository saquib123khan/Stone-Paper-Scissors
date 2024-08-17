let userScore = 0
let compScore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('.msg')
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const drawGame = () => {
    console.log('Game Draw');
    msg.innerText = 'Game Draw'
    msg.style.backgroundColor = 'black'
}

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

const showWinner = (userwin, userChoice, compChoice) => {
   if(userwin){
    console.log('You win');
    userScore++
    userScorePara.innerText = userScore
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = 'green'
   }else{
    console.log('You Lose');
    compScore++
    compScorePara.innerText = compScore
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = 'red'
   }
}

const playGame = (userChoice) => {
   console.log('user choice =', userChoice);

   // computer Choice
  const compChoice = genCompChoice()
  console.log('comp choice =', compChoice);

  if(userChoice === compChoice){
      drawGame()
  } else{
    let userwin = true
    if(userChoice === 'rock'){
      userwin = compChoice === 'paper' ? false : true 
    }else if (userChoice === 'paper'){
        userwin = compChoice === 'rock' ? true : false
    }else {
      userwin = compChoice === 'scissors' ? true : false
    }
    showWinner(userwin, userChoice, compChoice)
  }
}



choices.forEach((choice)=> {
    choice.addEventListener('click', () => {
      const userChoice =  choice.getAttribute('id')
        playGame(userChoice)
    })
})