function sumEnds(arr) {
    return Number(arr[0]) + Number(arr[arr.length - 1]);  
}

console.log(sumEnds(['20', '30', '40']));
console.log(sumEnds(['5', '10']));
