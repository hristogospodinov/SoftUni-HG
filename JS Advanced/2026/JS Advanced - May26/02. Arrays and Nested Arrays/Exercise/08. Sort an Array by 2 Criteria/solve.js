function sort2Criteria(arr) {
    arr.sort((a, b) => {
        let result = a.length - b.length;

        if (result === 0) {
            result = a.localeCompare(b);
        }

        return result;
    });

    console.log(arr.join('\n'));    
}

sort2Criteria(['alpha', 'beta', 'gamma']);
console.log('-'.repeat(15));
sort2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('-'.repeat(15));
sort2Criteria(['test', 'Deny', 'omen', 'Default']);

// arr.sort((a, b) => a.length - b.length || a.localeCompare(b));