
const cards = [
{
rank:'queen' ,
suit:'hearts' ,
cardImage: 'images/queen-of-hearts.png'
},
{
rank:'queen' ,
suit: 'diamonds' ,
cardImage: 'images/queen-of-diamonds.png'
},
{
rank:'king' ,
suit:'hearts' ,
cardImage: 'images/king-of-hearts.png'
},
{
rank:'king' ,
suit:'diamonds' ,
cardImage: 'images/king-of-diamonds.png'
}
];
const cardsInPlay = [];


var flipCard = function(){

	cardId = this.getAttribute('data-id');
	console.log(cardId);


console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log("User flipped " + cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].suit);

// console.log("User flipped " + cards[cardId]);
// cardsInPlay.push(cards[cardId]);
cardsInPlay.push(cards[cardId].card);
this.setAttribute('src', cards[cardId].cardImage);
this.setAttribute(cards[cardId].cardImage)
if (cardsInPlay.length === 2) {
 checkForMatch();
}
};

var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}	
};

var createBoard = function(){

	for (let i = 0; i < cards.length; i++) {
   //console.log("mmm");
   var cardElement = document.createElement('img');
 // cardElement.setAttribute('attributeName', 'attributeValue'); 

  cardElement.setAttribute('src', 'images/back.png');
  cardElement.setAttribute('data-id', i); 
 
  cardElement.addEventListener('click', flipCard);
  document.getElementById('game-board').appendChild(cardElement);
}
}
//flipCard(0);
//flipCard(2);
createBoard();