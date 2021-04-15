

function solve(num) {
    months = Array(
        "January",
         "February",
          "March", 
          "April", 
          "May", 
          "June", 
          "July", 
          "August", 
          "September",
           "October",
            "November", 
            "December")
    if (num < months.length + 1) {
        console.log(months[num - 1])
    } else {
        console.log("Error!")
    }
}


solve(1)
solve(2)
solve(3)
solve(4)
solve(5)
solve(6)
solve(7)
solve(8)
solve(9)
solve(10)
solve(11)
solve(12)
solve(13)

