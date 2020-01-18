

//console.log("Up and running!");



// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);

//const cards = ["queen","queen","king","king"];
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

function createBoard(){

	for (let i = 0; i < arrayName.length; i++) {
    // Logic here
   let cardElement = document.createElement('img');
 // cardElement.setAttribute('attributeName', 'attributeValue'); 
  cardElement.setAttribute('src', "images/back.png");
  cardElement.setAttribute(cardElement[i]); 
  cardElement.addEventListener('click' ,flipCard(cardElement));
}
}

function flipCard(cardId){
// let cardOne = cards[0];
// cardsInPlay.push(cardOne);

//  console.log("User flipped " + cardOne);

//  let cardTwo = cards[2];
//  cardsInPlay.push(cardTwo);

//  console.log("User flipped " + cardTwo);
 
 // if (cardsInPlay.length === 2){
 // 	if (cardsInPlay[0] === cardsInPlay[1])
 // 	{
 // 		alert("You found a match!");
 // 	}else {
 // 		alert("Sorry, try again.");
 // 	}
// }
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log("User flipped " + cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].suit);

// console.log("User flipped " + cards[cardId]);
// cardsInPlay.push(cards[cardId]);
 checkForMatch();

}
function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}	
}
//flipCard(0);
//flipCard(2);
cards.createBoard();