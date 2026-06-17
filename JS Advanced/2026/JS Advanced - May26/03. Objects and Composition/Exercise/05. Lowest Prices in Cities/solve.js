function townPrices(input) {
    let lowestPrices = {};

    for (const element of input) {
        let [townName, product, price] = element.split(' | ');
        price = Number(price);

        const currentProduct = lowestPrices[product];

        if ( !currentProduct || currentProduct.price > price ) {
            lowestPrices[product] = {
                town: townName,
                price: price
            };
        }      
    }    

    for (const product in lowestPrices) {
        console.log(`${product} -> ${lowestPrices[product].price} (${lowestPrices[product].town})`);
    }
}

townPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)