function spiralMatrix(rows, cols) {
    let result = [];
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;
    let current = 1;

    for (let row = 0; row < rows; row++) {
            result.push([]);
        for (let col = 0; col < cols; col++) {
            result[row][col] = 0;
        }        
    }

    while((top <= bottom) && (left <= right)) {
    

        for (let col = left; col <= right; col++) {
            result[top][col] = current;
            current++;
        }
        top++;
        if (top > bottom) break;


        for (let row = top; row <= bottom; row++) {
            result[row][right] = current;
            current++;
        }
        right--;
        if (left > right) break;

        for (let col = right; col >= left; col--) {
            result[bottom][col] = current;
            current++;        
        }
        bottom--;
        if (top > bottom) break;

        for (let row = bottom; row >= top; row--) {
            result[row][left] = current;
            current++;
        }
        left++;
        if (left > right) break;
    }

    for (const row of result) {
        console.log(row.join(' '));        
    }
}

spiralMatrix(5,5)