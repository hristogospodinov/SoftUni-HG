function fruit(fruit, weightInGr, pricePerKilo) {
    let weightInKg = weightInGr / 1000;
    let totalPrice = weightInKg * pricePerKilo;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);    
}


// Tests
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);