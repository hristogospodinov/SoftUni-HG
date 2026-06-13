function orbit(arr) {
    let result = [];
    let starRow = arr[2];
    let starCol = arr[3];
    let rowDistance = 0;
    let colDistance = 0;

    for (let row = 0; row < arr[1]; row++) {
        result.push([]);
        for (let col = 0; col < arr[0]; col++) {
            rowDistance = Math.abs(row - starRow);
            colDistance = Math.abs(col - starCol);
            result[row][col] = Math.max(rowDistance,colDistance) + 1;
        }
    }
    for (let row of result) {
        console.log(row.join(' '));        
    }

}

orbit([4, 4, 0, 0]);
console.log('='.repeat(20));
orbit([5, 5, 2, 2]);
console.log('='.repeat(20));
orbit([3, 3, 2, 2]);
