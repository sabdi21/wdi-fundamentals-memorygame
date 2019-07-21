var cards = ["king", "queen", "king", "queen"]
var cardsInPlay = []

var cardOne = cards[0];
var cardTwo = cards[1];


cardsInPlay.push(cardOne, cardTwo) 
console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo); 

if (cardsInPlay.length === 2) {
    console.log("two cards have been selected");
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You have found a match")
    } else {
        alert("try again");
    }
}


