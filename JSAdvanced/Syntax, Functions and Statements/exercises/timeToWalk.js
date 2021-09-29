function func(steps, footprint, speed){
    let distance = (steps*footprint)/1000
    let rest = Math.floor(distance*2)
    let timeInSec = (distance/speed)*3600
    let sec = Math.round(timeInSec % 60)
    let min = Math.floor((timeInSec/60) + rest)%60
    let hours = Math.floor(timeInSec/3600)%60
    console.log(`${checkFormat(hours)}:${checkFormat(min)}:${checkFormat(sec)}`)
    function checkFormat(value){
        if (value < 10){
            return `0${value}`
        }
        return value
    }
}


func(2564, 0.70, 5.5    )