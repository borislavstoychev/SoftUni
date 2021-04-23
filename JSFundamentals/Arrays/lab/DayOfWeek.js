function dayOfWeek(num) {
    const days = {
        1: "Monday",
        2: "Thuesday",
        3: "Wensday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
    console.log(num <= 7 ? days[num] : "Invwlid day!")
}

dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(7)
dayOfWeek(11)