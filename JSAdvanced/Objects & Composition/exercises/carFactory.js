function carFactory(obj){
    let engine = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    };
    let checkEngine = (e, p) =>{
        if (p <= 90){
            return e['Small engine']
        }else if (p <= 120) {
            return e['Normal engine']
        }else {
            return e['Monster engine']
        }
    };
    const result = {
        model: obj.model,
        engine: checkEngine(engine, obj.power),
        carriage: {type: obj.carriage, color: obj.color},
        wheels: new Array(4).fill(obj.wheelsize % 2==0 
            ? obj.wheelsize - 1 
            : obj.wheelsize)
    };
    return result
}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }))