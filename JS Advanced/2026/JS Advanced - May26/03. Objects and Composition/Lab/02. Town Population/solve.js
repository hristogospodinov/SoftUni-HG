function townPopulation(array) {
    const towns = new Map();
    for (const line of array) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);
        if (towns.has(town)) {
            let currentPopulation = towns.get(town);
            towns.set(town, currentPopulation + population);
        } else {
            towns.set(town, population);
        }
    }

    for (const [town, population] of towns) {
        console.log(`${town} : ${population}`);        
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

console.log("-".repeat(20));

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);