function diagonals(array) {
    let sumLeftDiag = 0;
    let sumRightDiag = 0;

    for (let row = 0; row < array.length; row++) {
        sumLeftDiag += array[row][row];
        sumRightDiag += array[row][array.length - 1 - row];
    }

    console.log(sumLeftDiag, sumRightDiag); 
}

diagonals([[20, 40],
 [10, 60]]
)


diagonals([[3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]]
)

// function diagonals(array) {
//     let sumLeftDiag = 0;
//     let sumRightDiag = 0;

//     for (let row = 0; row < array.length; row++) {
//         for (let i = 0; i < array[row].length; i++) {
//             if (row === i) {
//                 sumLeftDiag += array[row][i];
//             }            
//             if (array.length - row - 1 == i) {
//                 sumRightDiag += array[row][i];
//             }
//         }
//     }

//     console.log(sumLeftDiag, sumRightDiag); 
// }