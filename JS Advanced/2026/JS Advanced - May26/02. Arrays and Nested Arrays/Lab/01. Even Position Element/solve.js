function findEvenPositions(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);        
    }

    console.log(result.join(' '));    
}

findEvenPositions(['20', '30', '40', '50', '60']);
findEvenPositions(['5', '10']);