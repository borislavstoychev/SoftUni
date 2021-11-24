function solve(arr, sortingCriterion){
    
    class Ticket{
        constructor(destination, price, status){
            Object.assign(this,{
                destination,
                price,
                status,
            });
        };
        compareTo(other, criterion){
            if (typeof this[criterion] === 'number'){
                return this[criterion] - other[criterion];
            };
            return this[criterion].localeCompare(other[criterion]); 
        };
    };

    let tickets = [];
    arr.forEach(element => {
        let [destinationName, price, status] = element.split("|")
        price = Number(price);
        tickets.push(new Ticket(destinationName, price, status));
    });
    tickets.sort((a,b) => a.compareTo(b, sortingCriterion));
    return tickets;
};

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'))