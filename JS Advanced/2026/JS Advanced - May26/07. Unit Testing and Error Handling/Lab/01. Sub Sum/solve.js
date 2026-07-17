function subSum(array, start, end) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    let result = 0;
    let rightSide = end;
    let leftSide = start;
    if (end > array.length - 1) {
        rightSide = array.length - 1;   
    }
    if (start < 0) {
        leftSide = 0;
    }

    for (let i = leftSide; i <= rightSide; i++) {
        result += Number(array[i]);
    }
    return result;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));
