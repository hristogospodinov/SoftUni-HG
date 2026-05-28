function area(radius) {
    let result;
    if (typeof radius === 'number') {
        result = Math.PI * radius * radius;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}

area(5);
area(7.5);
area('name');