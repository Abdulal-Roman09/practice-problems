function fib(n){

    if(n<=1) return n;
    const returnValue = fib(n-1) + fib(n-2);
    return  returnValue;
}
console.log(fib(16));
