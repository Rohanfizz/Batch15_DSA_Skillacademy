function pattern1(n: number) {
    for (let i = 1; i <= n; i++) {
        // Run n times
        // i = 1,2,3......n
        let currRow = "";
        // The below loop will run i times and will add i stars
        for (let j = 1; j <= i; j++) {
            currRow += "*"; // every time we will add 1 star
            //this loop will run i times, total i stars will be added
        }
        console.log(currRow);
    }
}
pattern1(5)
