function increasedList(arr) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            result.push(arr[i]);
            biggest = arr[i];
        }
    }
    return result;    
}

console.log(increasedList([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(increasedList([1, 2, 3,4]));
console.log(increasedList([20, 3, 2, 15,6, 1]));