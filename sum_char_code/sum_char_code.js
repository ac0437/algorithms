function sum_char_codes(n) {
    let sum = 0;
    for (let i = 0; i < n.length;i++) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

console.log(sum_char_codes("Hello World!"));
console.log(sum_char_codes("hello world!"));