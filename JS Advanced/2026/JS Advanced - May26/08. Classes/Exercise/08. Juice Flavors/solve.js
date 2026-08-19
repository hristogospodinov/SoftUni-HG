function juiceFlavors(input) {
    const juices = new Map();
    const bottles = new Map();

    for (const line of input) {
        const [juice, quantity] = line.split(' => ');
        const amount = Number(quantity);

        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }

        juices.set(juice, juices.get(juice) + amount);

        const currentQuantity = juices.get(juice);

        if (currentQuantity >= 1000) {
            const producedBottles = Math.floor(currentQuantity / 1000);

            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }

            bottles.set(juice, bottles.get(juice) + producedBottles);

            juices.set(juice, currentQuantity % 1000);
        }
    }

    for (const [juice, count] of bottles) {
        console.log(`${juice} => ${count}`);
    }
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)
console.log('-'.repeat(20));

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)