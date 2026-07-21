function playingCards(face, suit) {
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }
    const validFaces = [
        '2', '3', '4', '5', '6', '7',
        '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    if (!validFaces.includes(face)) {
        throw new Error('Invalid card!');
    }

    if (!suits.hasOwnProperty(suit)) {
        throw new Error('Invalid card!');
    }

    let card = {
        face,
        suit,
        toString() {
            return `${this.face}${suits[this.suit]}`;
        }
    }   

    return card;
}

let card1 = playingCards('A', 'S');
let card2 = playingCards('K', 'H');

console.log(card1.toString());
console.log(String(card1));

console.log(card2.toString());