function wordsUpppercase(str) {
    let parts = str.toUpperCase().split(/[\W_]+/);
    let result = [];

    for (let part of parts) {
        if (part !== '') {
            result.push(part);
        }
    }

    console.log(result.join(', '));
}

wordsUpppercase('Hi, how are you?');
wordsUpppercase('hello')