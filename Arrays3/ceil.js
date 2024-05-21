function findCeil(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var ans = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target)
            return arr[mid];
        else if (arr[mid] < target)
            l = mid + 1;
        else if (arr[mid] > target) {
            ans = arr[mid]; // if arr[mid] if bigger, it can be a potential ceil
            r = mid - 1;
        }
    }
    return ans;
}
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var target = 100;
console.log(findCeil(arr, target));
