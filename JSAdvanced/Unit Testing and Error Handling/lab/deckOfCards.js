let createCard = require('./playingCards')

function printDeckOfCards(cards){
    let deck = [];
    let face;
    let suit;
    let invalid;
    cards.forEach(element => {
        element.length === 3 
        ?  [face, suit] = [element.slice(0,2), element.slice(-1)]
        :[face, suit] = element;
        try {
            deck.push(createCard(face, suit))
        } catch (error) {
            invalid = `Invalid card: ${element}`;
    
        }
    });
    return !invalid ? deck.join(" ") : invalid
    
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '1C']))