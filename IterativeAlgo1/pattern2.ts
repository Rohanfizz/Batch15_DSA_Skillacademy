function pattern2(n: number) {
    for (let i = n; i >= 1; i--) {
        let stars = i;
        let spaces = n - stars;

        //ans for currRow
        let currRow = "";
        for (let j = 1; j <= spaces; j++) {
            currRow += " ";
        }
        for (let j = 1; j <= stars; j++) {
            currRow += "*";
        }
        console.log(currRow);
    }
}
pattern2(15)
