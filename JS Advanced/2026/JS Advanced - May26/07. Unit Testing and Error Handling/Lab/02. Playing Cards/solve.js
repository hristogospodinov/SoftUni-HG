function playingCards(face, suit) {
    let card = {
        face,
        suit,
        toString() {
            return `${this.face}${suits[this.suit]}`;
        }
    }
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }
}

let card1 = playingCards('A', 'S');
let card2 = playingCards('K', 'H');

card1.toString();
card2.toString();