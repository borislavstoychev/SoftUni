function oddOccurrences(str) {
    let result = new Map();
    for (let el of str.split(" ")) {
        el = el.toLowerCase();
        if (!result.has(el)) {
            result.set(el, 0);
        }
        let value = result.get(el);
        value += 1;
        result.set(el, value);

    }
    let res = "";
    for (let [key, value] of result){
        if (value % 2 !== 0) {
            res += key + " ";
        }
    }
    console.log(res);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')