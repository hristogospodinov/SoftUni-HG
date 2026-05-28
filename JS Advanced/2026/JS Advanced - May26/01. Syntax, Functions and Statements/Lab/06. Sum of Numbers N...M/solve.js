function sumOfNumbersNtoM(n, m) {
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum);
}

sumOfNumbersNtoM(1, 5);
sumOfNumbersNtoM(3, 7);
sumOfNumbersNtoM(-8, 20);

