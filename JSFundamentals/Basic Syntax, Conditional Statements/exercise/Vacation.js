function solve(members, groupOfPeople, dayOfWeek) {
    if (groupOfPeople == "Students") {
        if (dayOfWeek == "Friday") {
            price = 8.45;
        }else if (dayOfWeek == "Saturday") {
            price = 9.80;
        } else if (dayOfWeek == "Sunday") {
            price = 10.46;
        }
    } else if (groupOfPeople == "Business") {
        if (dayOfWeek == "Friday") {
            price = 10.90;
        }else if (dayOfWeek == "Saturday") {
            price = 15.60;
        } else if (dayOfWeek == "Sunday") {
            price = 16;
        }
    } else if (groupOfPeople == "Regular") {
        if (dayOfWeek == "Friday") {
            price = 15;
        }else if (dayOfWeek == "Saturday") {
            price = 20;
        } else if (dayOfWeek == "Sunday") {
            price = 22.50;
        }
    } if (groupOfPeople == "Students" && members >= 30) {
        price *= 0.85;
        console.log(`Total price: ${(price * members).toFixed(2)}`)
    } else if (groupOfPeople == "Business" && members >= 100) {
        members -= 10
        console.log(`Total price: ${(price * members).toFixed(2)}`)
    }else if (groupOfPeople == "Regular" && members > 10 && members <= 20) {
        console.log(`Total price: ${((members * price) * 0.95).toFixed(2)}`)
    } else {
        console.log(`Total price: ${(members * price).toFixed(2)}`)
    }
}
solve(30,"Students","Sunday")
solve(40,"Regular","Saturday")