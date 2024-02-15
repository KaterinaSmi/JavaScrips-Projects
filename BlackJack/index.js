
let player={
    name:"Per",
    chips:173
}
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = true;
let message=" ";
let messageEl=document.getElementById('message-el');
let sumEl=document.getElementById('sum-el');
let cardsEl= document.getElementById('cards-el')


let playerEl=document.getElementById('cash')
playerEl.textContent=player.name+": $ " +player.chips

function start(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function getRandomCard(){
  let randomNumber= Math.floor(Math.random()*13)+1; 
   if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }


}
function renderGame(){
    cardsEl.textContent ="Cards: " 

    for (let i=0;i<cards.length;i++){
        cardsEl.textContent+= cards[i]+" "
    }
    sumEl.textContent= "Sum: " + sum
    if (sum <= 21){
        message="Do you want to draw a new card?"
        
    }else if (sum === 21){
        message="Wohoo! You've got BlackJack!"
        hasBlackJac= true
    }else {
        message="You are out of the game!"
        isAlive = false
    }
   messageEl.textContent= message
 
    }
function newCard(){
    if (isAlive===true && hasBlackJack===false){
       let newCardd= getRandomCard();
        sum+=newCardd
        cards.push(newCardd)
        renderGame() 
    
    
}}



