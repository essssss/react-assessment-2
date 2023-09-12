function unroll(squareArray) {
    let end = squareArray.length;

    let start = 0;
    let newArray = [];

    while (end > start) {
        for (let j = start; j < end; j++) {
            newArray.push(squareArray[start][j]);
        }

        for (let i = start + 1; i < end; i++) {
            newArray.push(squareArray[i][end - 1]);
        }

        end--;

        for (let j = end - 1; j >= start; j--) {
            newArray.push(squareArray[end][j]);
        }
        for (let i = end - 1; i > start; i--) {
            newArray.push(squareArray[i][start]);
        }
        start++;
    }

    return newArray;
}

module.exports = unroll;
