
let cards = []
let bot_cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let startEl = document.getElementById("start")
let newEl = document.getElementById("new")
let stopEl = document.getElementById("stop")
let notificationEl = document.getElementById("notification")

startEl.addEventListener("click", function(){
    startGame()
}) 

newEl.addEventListener("click", function(){
    newCard()
})

stopEl.addEventListener("click", function(){
    stopGame()
})



function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) {
        return 10
    } else if ( randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    notificationEl.innerText = " "
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    stopEl.classList.remove("d-none")
    startEl.classList.add("d-none")
    newEl.classList.remove("d-none")
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21) {
        message = "Win"
        hasBlackJack = true
        startEl.classList.remove("d-none")
        stopEl.classList.add("d-none")
        newEl.classList.add("d-none")
    }else{
        message = "You lost"
        isAlive = false
        startEl.classList.remove("d-none")
        stopEl.classList.add("d-none")
        newEl.classList.add("d-none")
    }
    messageEl.textContent = message   
}

function newCard(){
    if (isAlive === true && hasBlackJack===false) {
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        renderGame() 
    }
    
}

function stopGame() {
  if( isAlive === true){
    notificationEl.innerText = "Stop at " + sum
    newEl.classList.add("d-none")
    stopEl.classList.add("d-none")
    startEl.classList.remove("d-none")
    if( bot() > sum) {
        notificationEl.innerText = "You lost"
    }
    else{
        notificationEl.innerText = "You Win but the bot lose"
    }
  }
}

function bot(){
    sum_bot = 0
    bot_cards = []
    while( sum_bot < 18){
        number = Math.floor(Math.random() * 13) + 1 
        toadd =number > 10 ? 10 : number == 1 ? 11 : number
        sum_bot += toadd
        bot_cards.push(toadd)
        
    }
    cardsEl.innerText = bot_cards +' '+sum_bot;
    if(sum_bot>21){
        sum_bot = 0
    }
    return sum_bot
}