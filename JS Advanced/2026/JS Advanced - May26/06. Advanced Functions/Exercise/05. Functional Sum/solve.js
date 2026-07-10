function add(num) {
    let sum = num;

    function inner(nextNum) {
        sum += nextNum;
        return inner;
    }

    inner.toString = function () {
        return sum;
    };

    return inner;
}

console.log(add(1)(6)(-3).toString());
