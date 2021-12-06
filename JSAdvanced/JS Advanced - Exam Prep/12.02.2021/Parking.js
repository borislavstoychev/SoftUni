class Parking{
    constructor(capacity, vehicles=[]){
        this.capacity = capacity
        this.vehicles = vehicles
    }

    addCar( carModel, carNumber ){
        if (this.capacity <= 0){
            throw new Error('Not enough parking space.')
        }
        this.capacity --;
        this.vehicles.push({carModel, carNumber, payed: false})
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar( carNumber ) {
        const index = this.vehicles.findIndex((car) => car.carNumber === carNumber)
        if (index < 0){
            throw new Error("The car, you're looking for, is not found.")
        }
        if (this.vehicles[index].payed === false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(index, 1)
        this.capacity++
        return `${carNumber} left the parking lot.`
    }

    pay( carNumber ){
        const car= this.vehicles.find((car) => car.carNumber === carNumber)
        if(!car){
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (car.payed === true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        car.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    searchingCar(carNumber){
        let result = []
        this.vehicles.forEach((car, index) => {
            if ( car.carNumber == carNumber){
                result =  [car, index]
            }
        });
        return result
    }
    getStatistics(carNumber){
        if (!carNumber){
            let slotsMessage = `The Parking Lot has ${ this.capacity } empty spots left.`
            let cars = this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel))
            cars.forEach(car => {
                slotsMessage += `\n${car.carModel} == ${car.carNumber} - ${car.payed === false ? 'Not payed' : 'Has payed'}`
            })
            return slotsMessage
            
        }
        const [car,i] = this.searchingCar(carNumber)
        return `${car.carModel} == ${car.carNumber} - ${car.payed === false ? 'Not payed' : 'Has payed'}`
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

