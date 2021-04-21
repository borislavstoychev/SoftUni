function centuriesToMinutes (centuri) {
    //Assume that a year has 365.2422 days at average
    let years = centuri * 100 ;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log (
        `${centuri} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
        )
} 

centuriesToMinutes(1)
centuriesToMinutes(5)