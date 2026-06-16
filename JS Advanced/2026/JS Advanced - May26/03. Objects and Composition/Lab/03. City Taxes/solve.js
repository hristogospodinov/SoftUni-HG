function cityTaxes(name, population, treasury) {
    const city = {
        name,
        population,
        treasury
    };
    city.taxRate = 10;


    return city;
}

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);

