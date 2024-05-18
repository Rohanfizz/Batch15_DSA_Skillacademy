function zigZagTraversal(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            // Even
            for (var j = 0; j < arr[i].length; j++)
                console.log(arr[i][j]);
        }
        else {
            // Odd
            for (var j = arr[i].length - 1; j >= 0; j--)
                console.log(arr[i][j]);
        }
    }
}
var a = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 7],
];
zigZagTraversal(a);
