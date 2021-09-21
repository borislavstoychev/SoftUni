function circleArea(param) {
    if (typeof(param) === 'number') {
        console.log((param**2*Math.PI).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(param)}.`)
    }
}

circleArea(5)
circleArea('name')
