function magicalMatrix(arr) {
    let target = 0;
    for (let i = 0; i < arr[0].length; i++) {
        target += arr[0][i];
    }

    // Check rows
    for (let row = 0; row < arr.length; row++) {
        let rowSum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            rowSum += arr[row][col];
        }

        if (rowSum !== target) {
            return false;
        }
    }

    // Check cols
    for (let col = 0; col < arr[0].length; col++) {
        let colSum = 0;

        for (let row = 0; row < arr.length; row++) {
            colSum += arr[row][col];
        }

        if (colSum !== target) {
            return false;
        }
    }

    return true;
}

console.log(magicalMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log('-'.repeat(15));
console.log(magicalMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log('-'.repeat(15));
console.log(magicalMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));
