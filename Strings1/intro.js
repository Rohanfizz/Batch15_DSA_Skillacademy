// let s = "abc"
// let s = 'abc';
// let s = `abc`
// let s = `Rohan said, "Hi everyone!"`
// // String formatting
// let error = "Unhandled nullpointer exception!"
// console.log(`Encountered error while \"calling backend\": ${error}`)
// let arr = [10,20,30,40]
// arr[2] = 100;
// let s = "abcd"
// s[2] = "x"
// console.log(arr,s);
// 10,20,100,40,  abxd`
//Hack to manipulate strings
var s = "abcd";
var arr = s.split("");
arr[2] = "X";
s = arr.join("");
console.log(s);
s = s.replace("ab", "yy");
console.log(s);
