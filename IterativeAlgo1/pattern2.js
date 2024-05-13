function pattern2(n) {
    for (var i = n; i >= 1; i--) {
        var stars = i;
        var spaces = n - stars;
        //ans for currRow
        var currRow = "";
        for (var j = 1; j <= spaces; j++) {
            currRow += " ";
        }
        for (var j = 1; j <= stars; j++) {
            currRow += "*";
        }
        console.log(currRow);
    }
}
console.log(process.argv)
pattern2(parseInt(process.argv[2]));
