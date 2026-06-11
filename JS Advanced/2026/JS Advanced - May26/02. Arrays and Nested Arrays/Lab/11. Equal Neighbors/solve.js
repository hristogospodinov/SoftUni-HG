function equalPairs(array) {
    let count = 0;
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {

            //horizontally
            if ((col < array[row].length - 1) && (array[row][col] === array[row][col + 1])) {
                count++;
            }

            //vertically
            if ((row < array.length - 1) && (array[row][col] === array[row + 1][col])) {
                count++;
            }
        }
    }
    return count;
}

console.log(equalPairs(
[['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]
));
console.log('-'.repeat(20));
console.log(equalPairs(
[['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]
));
console.log('-'.repeat(20));
console.log(equalPairs(
[['2', '2', '5', '7', '4'],
 ['4', '0', '5', '3', '4'],
 ['2', '5', '5', '4', '2']]
));
console.log('-'.repeat(20));
