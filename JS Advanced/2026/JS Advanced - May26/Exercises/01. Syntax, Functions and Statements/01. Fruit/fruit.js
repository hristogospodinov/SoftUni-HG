function fruit(fruit, weightInGr, pricePerKilo) {
    let weight = weightInGr / 1000;
    let money = weightInKg * pricePerKilo;

    console.log(`I need ${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}


// Tests
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);