function maxSequence(arr) {
    let sequence = [];
    let currentSequence =[];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            currentSequence.push(arr[i]);
        } else {
            if (arr[i] === arr[i-1]) {
                currentSequence.push(arr[i]);
            } if (sequence.length < currentSequence.length) {
                sequence = currentSequence;
            }
            currentSequence = [];
        }
    }
    console.log(sequence.join(" "))
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])