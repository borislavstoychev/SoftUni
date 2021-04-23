function spice(n) {
    let spice = 0;
    let days = 0;

    function isEnoughSpice() {
        return spice - 26 > 0;
    }

    while (n >= 100) {
        spice += n;
        n -= 10;
        days += 1;
        isEnoughSpice() ? (spice -= 26) : (spice = 0);
    }

    console.log(`${days}
${isEnoughSpice() ? spice - 26 : 0}`);
}

spice(111)
