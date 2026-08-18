function autoCompany(inputs) {
    const cars = new Map();
    for (const input of inputs) {
        let [brand, model, counts] = input.split(" | ");
        counts = Number(counts);
        if (!cars.has(brand)) {
            let newBrand = new Map();
            newBrand.set(model,counts);
            cars.set(brand, newBrand);
        } else {
            if (!cars.get(brand).has(model)) {
                cars.get(brand).set(model,counts);
            } else {
                cars.get(brand).set(model, cars.get(brand).get(model) + counts);
            }
        }
        
    }
    cars.forEach((car, name) => {
        console.log(name);        
        car.forEach((counts, model) => {
            console.log(`###${model} -> ${counts}`);            
        })        
    })    
}

autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)