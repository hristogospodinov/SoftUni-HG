function game (moves) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = 'X';

    for (const move of moves) {
        let [row, col] = move.split(' ').map(Number);

        if (board[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
            
        }

        board[row][col] = player;

        if (checkWinner(board, player)) {
            console.log(`Player ${player} wins!`);
            break;            
        }

        if (isBoardFull(board)) {
            console.log(`The game ended! Nobody wins :(`);
            break;            
        }

        player = player === 'X' ? 'O' : 'X';
        
    }

    for (let row of board) {
        console.log(row.join('\t'));
    }
    
    

    function checkWinner(board, player) {
        for (let row = 0; row < 3; row++) {
            if(
                board[row][0] === player &&
                board[row][1] === player &&
                board[row][2] === player
            ) {return true;} 
        }
        for (let col = 0; col < 3; col++) {
            if (
                board[0][col] === player &&
                board[1][col] === player &&
                board[2][col] === player
            ) {return true;}
        }
        if (
            board[0][0] === player &&
            board[1][1] === player &&
            board[2][2] === player
        ) {return true;}
        if (
            board[0][2] === player &&
            board[1][1] === player &&
            board[2][0] === player
        ) {return true;}
        return false;
    }    

    function isBoardFull(board) {
        for (const row of board) {
            if (row.includes(false)) {
                return false;
            }            
        }
        return true;
    }
    
}

game(["0 1",
 "0 0",
 "0 2", 
 "2 0",
 "1 0",
 "1 1",
 "1 2",
 "2 2",
 "2 1",
 "0 0"]
);

console.log('-'.repeat(20));

game(["0 0",
 "0 0",
 "1 1",
 "0 1",
 "1 2",
 "0 2",
 "2 2",
 "1 2",
 "2 2",
 "2 1"]
)

console.log('-'.repeat(20));

game(["0 1",
 "0 0",
 "0 2",
 "2 0",
 "1 0",
 "1 2",
 "1 1",
 "2 1",
 "2 2",
 "0 0"]
)

console.log('-'.repeat(20));

game([
    "0 0",
    "1 0",
    "0 1",
    "1 1",
    "0 2"
]);

console.log('-'.repeat(20));

game([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "2 2"
]);
    // let validTurn = true;
    // console.log(board[0][1]);

    // let currentPlayer = true;
    // if (validTurn) {
    //     currentPlayer = !currentPlayer;
    //     validTurn = !validTurn;
    // }