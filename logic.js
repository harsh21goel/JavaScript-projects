let randomnumber=parseInt(Math.random()*100+1)
const submit= document.querySelector("#subt")
const userInput= document.querySelector("#guessfeild")
let guessSlot=document.querySelector(".guesses")
let remaining=document.querySelector(".lastresult")
const lowOrhigh=document.querySelector(".loworhi")
const startOver=document.querySelector(".resultparas")
const p=document.createElement("p")


let prevGuess=[]
let numGuesses=1

let playgame=true

if (playgame) {
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateguess(guess)
    })
}

function validateguess(guess){
    if (isNaN(guess)) {
        alert("Pleae enter a valid number")
    }else if(guess<1){
        alert("Please enter a number which is greater then 0")
    }else if(guess>100){
        alert("Please enter a number which is lower then 100")
    }else{
        prevGuess.push(guess)
        if (numGuesses>10) {
            displayguess(guess)
            displaymessage(`Game Over,Random number was ${randomnumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }

}

function checkguess(guess){
        if (guess===randomnumber) {
            displaymessage(`You guessed it right`)
            endgame()
        }else if(guess<randomnumber){
            displaymessage(`Your guess is too low`)
        }else if(guess>randomnumber){
            displaymessage(`Your guess is too High`)
        }
}

function displayguess(guess){
    userInput.value=""
    guessSlot.innerHTML += `${guess} ,`
    numGuesses ++

    remaining.innerHTML=`${11- numGuesses}`
}

function displaymessage(message){
    lowOrhigh.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
 userInput.value=""
 userInput.setAttribute("disabled","")
 p.classList.add("button")
 p.innerHTML=`<h2 id="newgame">Start new game</h2>`
 startOver.appendChild(p)
 playgame=false
 newgame()
}
function newgame(){
   let newgamebtn= document.querySelector("#newgame")
   console.log(newgamebtn)
   newgamebtn.addEventListener("click",()=>{
    randomnumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuesses=1
    guessSlot.innerHTML=""
    remaining.innerHTML=`${11- numGuesses}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    lowOrhigh.innerHTML=""
       playgame=true
   })
}

