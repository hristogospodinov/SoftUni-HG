function opsNotation(input) {
    let stack = [];

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    

    for (const token of input) {
        if (typeof token === "number") {
            stack.push(token);
        } else {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;                
            }

            let b = stack.pop();
            let a = stack.pop();

            let result = operations[token](a, b);

            stack.push(result);
        }
    }

    if (stack.length !== 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(stack[0]);
    }
}

opsNotation([3, 4, '+'])
opsNotation([5, 3, 4, '*', '-'])
opsNotation([7, 33, 8, '-'])
opsNotation([15, '/'])