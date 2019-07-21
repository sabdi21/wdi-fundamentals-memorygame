// console.log("It's running just fine!");

var cards = ["king", "queen", "king", "queen"]
var cardsInPlay = []
// console.log(cards);

// cardsInPlay.push('cardOne');
// console.log("User flipped" + cardOne);

// cardsInPlay.push('cardTwo');
// console.log("User flipped" + cardTwo);

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again");
	}
}
//  console.log(checkForMatch());
var flipcard = function(cardId) {
    console.log("User flipped " + cards[cardId]);
    console.log(cardId);
	cardsInPlay.push(cards[1]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
flipcard();




