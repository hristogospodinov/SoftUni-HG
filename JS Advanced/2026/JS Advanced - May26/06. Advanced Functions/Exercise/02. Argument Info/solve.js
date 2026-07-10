function solve(...inputs) {
    let counts = {};
    for(let current of inputs) {
        let type = typeof current;
        console.log(`${type}: ${current}`);
        if (!(type in counts)) {
            counts[type] = 0;
        }        
        counts[type] += 1;
    }   
    
    Object.entries(counts)
        .sort((a,b) => b[1] - a[1])
        .forEach((a) => {
            console.log(`${a[0]} = ${a[1]}`);            
        });    
}

solve('cat', 24, 42, function () { console.log('Hello world!'); })