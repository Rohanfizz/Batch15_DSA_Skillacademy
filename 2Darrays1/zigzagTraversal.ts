function zigZagTraversal(arr: number[][]) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            // Even
            for (let j = 0; j < arr[i].length; j++) console.log(arr[i][j]);
        } else {
            // Odd
            for (let j = arr[i].length - 1; j >= 0; j--) console.log(arr[i][j]);
        }
    }
}

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 7],
];

zigZagTraversal(a)