function printArray(array, num) {
    let result = [];
    for (let i = 0; i < array.length; i += num) {
        result.push(array[i]);
    }

    return result;
}

console.log(printArray(['5', '20', '31', '4', '20'], 2));
console.log('-'.repeat(10));
console.log(printArray(['dsa','asd', 'test', 'tset'], 2));
console.log('-'.repeat(10));
console.log(printArray(['1', '2','3', '4', '5'], 6));


