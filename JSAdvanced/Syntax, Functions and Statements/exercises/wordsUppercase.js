    function wordUppercase(str) {
        return str
        .match(/[\w]+/g)
        .map((word) => word.toUpperCase())
        .join(', ');
    }

console.log(wordUppercase("'Hi, how are"))