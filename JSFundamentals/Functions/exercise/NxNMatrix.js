function matrix (num){
    let matrix = []
    for(let i=0; i < num; i++) {
        console.log(Array(num).fill(num).join(" "))
    }
}


matrix(3);
