function operations(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            console.log('Invalid operator');
            return;
    }
    console.log(result);
}

operations(5, 3, '+');
operations(5, 3, '-');
operations(5, 3, '*');
operations(5, 3, '/');
operations(5, 3, '%');
operations(5, 3, '**');
operations(5, 3, '^');