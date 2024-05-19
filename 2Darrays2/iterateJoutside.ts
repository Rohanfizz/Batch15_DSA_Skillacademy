function iterate(arr: number[][]): void {
    for (let j = 0; j < arr[0].length; j++) {
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i][j]);
        }
    }
}
``
let a = [
    [2, 3, 6, 2],
    [1, 4, 3, 7],
    [3, 2, 9, 5],
];
iterate(a);
