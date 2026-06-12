function checkDiags(array) {
    let matrix = array.map(row => row.split(' ').map(Number));

    let mainSum = 0;
    let secondarySum = 0;

    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - 1 - row];        
    }
   
    console.log(matrix);
    console.log(mainSum);
    console.log(secondarySum);
}

checkDiags(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)

    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix[row].length; col++) {
    //         if (row === col) {
    //             mainSum += matrix[row][col];
    //         }
    //         if (row === matrix[row].length - col - 1) {
    //             secondarySum += matrix[row][col];
    //         }
    //     }
    // }