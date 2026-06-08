function secNK(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = Math.max(0, i - k); j < i; j++) {
            sum += result[j];
        }        
        result.push(sum);
    }
    return result;
}

console.log(secNK(6,3));
console.log(secNK(8,2));


