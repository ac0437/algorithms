function balanceString(s) {
    let count = 0;
    let balance = 0;

    for(let l of s) {
        if(l === "R") count++;
        if(l === "L") count--;
        if(count === 0) balance++;
    }

    return balance;
}

console.log(balanceString("RLRRLLRLRL"))