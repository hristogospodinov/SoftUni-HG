function storage(input) {
    input.sort((a, b) => a.localeCompare(b));

    let currentLetter = '';

    for (const product of input) {
        let [name, price] = product.split(' : ');

        let firstLetter = name[0];
        if (firstLetter != currentLetter) {
            console.log(firstLetter);
            currentLetter = firstLetter;            
        }
        console.log(`  ${name}: ${price}`);        
    }
}

storage(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);

console.log('-'.repeat(20));

storage(["Banana : 2",
"Rubic's Cube : 5",
"Raspberry P : 4999",
"Rolex : 100000",
"Rollon : 10",
"Rali Car : 2000000",
"Pesho : 0.000001",
"Barrel : 10"]
);
