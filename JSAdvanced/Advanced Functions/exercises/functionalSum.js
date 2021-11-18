function add(sum) {
    function result(num) {
        sum += num
        return result
    }
    result.toString = () => sum;
    return result    
}

console.log(add(1)(6)(-3)(200).toString())