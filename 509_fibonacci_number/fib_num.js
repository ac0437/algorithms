// JS: https://leetcode.com/problems/fibonacci-number/submissions/1212936428/
// TS: https://leetcode.com/problems/fibonacci-number/submissions/1212936012/
function fib(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(2))