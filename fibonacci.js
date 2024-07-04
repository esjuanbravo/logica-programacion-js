// Código que calcula la serie de fibonacci.

function fibonacci(n) {
    let fib = [0,1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[ i - 1 ] + fib[ i - 2 ];
    } 
    return console.log(fib);

}
fibonacci(50)
