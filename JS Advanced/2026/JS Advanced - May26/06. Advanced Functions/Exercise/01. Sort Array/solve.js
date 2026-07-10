function solve(arr, order) {
    let sorters = {
        asc: (a,b) => a - b,
        desc: (a,b) => b - a
    }

    arr.sort(sorters[order]);
    return arr;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));
