function reverseArray(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        // swap arr[l] arr[r]
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
function reverseArrayInRange(arr, l, r) {
    while (l < r) {
        // swap arr[l] arr[r]
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
var arr = [10, 20, 30, 40, 50, 60, 70];
console.log(arr);
reverseArrayInRange(arr, 1, 4);
console.log(arr);
