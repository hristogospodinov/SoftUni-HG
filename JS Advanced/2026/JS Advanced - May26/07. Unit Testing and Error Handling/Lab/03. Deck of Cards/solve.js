function printDeckOfCards(cards) {

    function playingCards(face, suit) {
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        const validFaces = [
            '2', '3', '4', '5', '6', '7',
            '8', '9', '10', 'J', 'Q', 'K', 'A'
        ];

        if (!validFaces.includes(face) || !suits.hasOwnProperty(suit)) {
            throw new Error('Invalid card!');
        }

        return {
            face,
            suit,
            toString() {
                return `${this.face}${suits[this.suit]}`;
            }
        };
    }

    const deck = [];

    for (const currentCard of cards) {
        const suit = currentCard.slice(-1);
        const face = currentCard.slice(0, -1);

        try {
            deck.push(playingCards(face, suit));
        } catch {
            console.log(`Invalid card: ${currentCard}`);
            return;
        }
    }

    console.log(deck.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])