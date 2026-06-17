function towns(input) {
    let result = [];

    for(let i = 1; i < input.length; i++) {
        let [townName, latitude, longitude]  = input[i]
                .split('|')
                .map(x => x.trim())
                .filter(x => x !== '');

        latitude = Number(latitude);
        longitude = Number(longitude);

        result.push({
            Town: townName,
            Latitude: Number(latitude.toFixed(2)),
            Longitude: Number(longitude.toFixed(2))
        });
    }
    
    return JSON.stringify(result);    
}

console.log(
towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));

console.log(towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));
