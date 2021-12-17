class SummerCamp{
    constructor (organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = []
    };

    registerParticipant (name, condition, money){
        if (!this.priceForTheCamp[condition]){
            throw new Error('Unsuccessful registration at the camp.')
        };
        if(this.findName(name)){
            return `The ${name} is already registered at the camp.`
        };
        if (this.priceForTheCamp[condition] > money){
            return 'The money is not enough to pay the stay at the camp.'
        }
        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`

    };
    findName(name){
        return this.listOfParticipants.find(a => a.name === name)
    };
    unregisterParticipant (name){
        let participant = this.findName(name)
        if(!participant){
            throw new Error(`The ${name} is not registered in the camp.`)
        };
        this.listOfParticipants.splice(this.listOfParticipants.indexOf(participant), 1)
        return  `The ${name} removed successfully.`
    };
    timeToPlay (typeOfGame, ...participant){
        if(typeOfGame === 'WaterBalloonFights'){
            let firstPlayer = this.findName(participant[0]);
            let seconPleyer = this.findName(participant[1]);
            if (!firstPlayer || !seconPleyer){
                throw Error('Invalid entered name/s.')
            };
            if (firstPlayer.condition !== seconPleyer.condition){
                throw Error(`Choose players with equal condition.`)
            };
            if (firstPlayer.power > seconPleyer.power){
                firstPlayer.wins += 1;
                return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`
            }else if(firstPlayer.power < seconPleyer.power){
                seconPleyer.wins += 1;
                return `The ${seconPleyer.name} is winner in the game ${typeOfGame}.`
            }
            return 'There is no winner.'
        };
        let pleyer = this.findName(participant[0])
        if (!pleyer){
            throw Error('Invalid entered name/s.')
        };
        pleyer.power += 20;
        return `The ${pleyer.name} successfully completed the game ${typeOfGame}.`
    };
    toString (){
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach(el =>{
            result += `\n${el.name} - ${el.condition} - ${el.power} - ${el.wins}`
        });
        return result
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());