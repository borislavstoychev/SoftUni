function day(year, month, day){
    if(day == 1){
        today1 = new Date(year, month-1, 0)
        console.log(`${today1.getYear()+ 1900}-${today1.getMonth()+1}-${today1.getDate()}`)
    }else{
        today = new Date(year, month, day-1)
        console.log(`${today.getYear() + 1900}-${today.getMonth()}-${today.getDate()}`)
    }

}

day(2016, 1, 1)