function sum(number) {
    // base case
    if(number === 1) return 1;

    return number + sum(number - 1);
}

console.log(sum(100))