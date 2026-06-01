function sameNums(num) {
    let numStr = num.toString();
    let firstDigit = numStr[0];
    let isSame = true;
    let sum = 0;

    for (let digit of numStr) {
        if (digit !== firstDigit) {
            isSame = false;
        }

        sum += Number(digit);
    }

    console.log(isSame);
    console.log(sum);   
}

sameNums(222222222);
sameNums(1234);