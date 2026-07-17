function calculator() {
    let num1;
    let num2;
    let result;
    return {
        init(number1, number2, resField) {
            num1 = document.querySelector(number1);
            num2 = document.querySelector(number2);
            result = document.querySelector(resField);
        },
        add() {
            const first = Number(num1.value);
            const second = Number(num2.value);
            result.value = first + second;
        },
        subtract() {
            const first = Number(num1.value);
            const second = Number(num2.value);
            result.value = first - second;
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



