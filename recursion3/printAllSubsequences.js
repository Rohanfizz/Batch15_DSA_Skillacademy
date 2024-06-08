function allSubSequences(i, asf, arr) {
    if (i == arr.length) {
        console.log(asf);
        return;
    }
    //pick
    allSubSequences(i + 1, asf + arr[i] + ",", arr);
    //not pick
    allSubSequences(i + 1, asf, arr);
}
allSubSequences(0, "", [10, 20, 30]);
