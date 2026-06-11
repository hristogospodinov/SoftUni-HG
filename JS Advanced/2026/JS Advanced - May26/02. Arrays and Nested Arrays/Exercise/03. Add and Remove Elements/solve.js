function addRemove(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let number = i + 1;
        if (array[i] === 'add') {
            result.push(number);
        } else {
            result.pop();
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
        
    }
}

addRemove(	['add', 'add', 'add', 'add']);
console.log('-'.repeat(20));
addRemove(	['add', 'add', 'remove', 'add', 'add']);
console.log('-'.repeat(20));
addRemove(	['remove', 'remove', 'remove']);
