function carFactory(car) {
    let result = {};

    let engine;

    if (car.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        };
    }
    else if (car.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    }
    else {
        engine = {
            power: 200,
            volume: 3500
        }
    }

    let carriage = {
        type: car.carriage,
        color: car.color
    };
    
    let wheelsize = car.wheelsize;

    if (wheelsize % 2 == 0) {
        wheelsize--;
    }

    let wheels = Array(4).fill(wheelsize);

    return {
        model: car.model,
        engine: engine,
        carriage: carriage,
        wheels: wheels
    }

}

console.log(carFactory(
{ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }));
  console.log(carFactory(
{ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }));

//   { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }
// { model: 'Opel Vectra',
//   engine: { power: 120,
//             volume: 2400 },
//   carriage: { type: 'coupe',
//               color: 'grey' },
//   wheels: [17, 17, 17, 17] }
