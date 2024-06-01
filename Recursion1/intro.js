//RECURSIVE CODE
function func(n) {
    // if(n == 0) return;
    console.log(n);
    func(n - 1);
    console.log(n);
}
func(5);
// 0
// 5 4 3 2 1
// 5,4,3,2,1
// 4
// 4, 3,2,1,0
// 
// function add(a,b):number{
//     return a+b;
// }
// function adder(a,b):number{
//     return add(a,b);
// }
// let ans = adder(10,20)
