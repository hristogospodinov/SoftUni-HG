function mixedSort(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = [];

    arr.sort((a, b) => a - b);
        
    while (left <= right) {
        result.push(arr[left++]);

        if (left <= right) {
            result.push(arr[right--]);
        }    
    }
    return result;
}

console.log(mixedSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log('-'.repeat(20));
console.log(mixedSort([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));


// function mixedSort(arr) {
//     let result = [];
//     let count = arr.length;
//     arr.sort((a, b) => a - b);
        
//     for (let i = 0; i < count; i++) {
//         if (i % 2 == 0) {
//             result.push(arr.shift());
//         } else {
//             result.push(arr.pop());
//         }
//     }
//     return result;
    
// }