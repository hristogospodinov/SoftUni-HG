function processOdd(array) {
    let result = [];

    return array.filter((element, index) => index % 2 == 1).map(x => x * 2).reverse().join(' ');
}

console.log(processOdd([10, 15, 20, 25]));
console.log(processOdd([3, 0, 10, 4, 7, 3]));
