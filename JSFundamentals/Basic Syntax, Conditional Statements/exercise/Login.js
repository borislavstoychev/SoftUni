function solve(arr) {
    const user = arr.shift()
    const pass = user.split("").reverse().join("")
    console.log(pass)
    let tries = 0

    for (const e of arr) {
        if (e !== pass) {
            tries += 1;
            if (tries >= 4) {
                console.log(`User ${user} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        } else {
            console.log(`User ${user} logged in.`);
        }
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny'])