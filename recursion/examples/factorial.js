function factorial(n) {
    let product = 1;
    for(let i = 1; i < n; i++) {
        product *= i;
    }

    return product
}

function factorial_rec(n) {
    if(n === 1) return 1;

    return n * factorial_rec(n - 1);
}

console.log(factorial(5));
console.log(factorial_rec(5));
console.log(factorial(10));
console.log(factorial_rec(10));
