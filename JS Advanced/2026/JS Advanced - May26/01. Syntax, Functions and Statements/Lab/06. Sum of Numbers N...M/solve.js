function sumOfNtoM(n, m) {
    n = Number(n);
    m = Number(m);
    
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum = sum + i;
    }
    return sum;
}
sumOfNtoM(1, 5);
sumOfNtoM(3, 7);
sumOfNtoM(-8, 20);

