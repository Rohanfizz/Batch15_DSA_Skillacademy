function factorial(n : number) : number{
    if(n == 0) return 1;
    let nm1Fact = factorial(n-1);
    return n * nm1Fact;
}

console.log(factorial(5));
