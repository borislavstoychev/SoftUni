function solve(speed, area) {
    speed = Number(speed);
    let status;
 
    const areaLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    const overLimit = speed - areaLimits[area]
 
    if (overLimit > 0) {
        
        switch(true){
            case (overLimit <= 20):
                status = 'speeding';
                break;
            case (overLimit <= 40):
                status = 'excessive speeding';
                break;
            default:
                status = 'reckless driving'
                break;
        }
        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${areaLimits[area]} - ${status}`);
    } else {

            console.log(`Driving ${speed} km/h in a ${areaLimits[area]} zone`);
    }
}
 
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');