function calories(input) {
    let calories = {};

    for (let i = 0; i < input.length; i+=2) {
        let food = input[i];
        let value = Number(input[i+1]);

        calories[food] = value;
    }

    console.log(calories);
    
}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
