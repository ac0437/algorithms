function two_crystal_ball(breaks) {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for(; i < breaks.length; i += jumpAmount) {
        if(breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;
    for(; i < breaks.length; i++){
        if(breaks[i]) {
            return i;
        }
    }

    return -1;
}

console.log(two_crystal_ball([false, false, false, true, true]))
console.log(two_crystal_ball([false, false, false]))
console.log(two_crystal_ball([false, false, false, false, false, false, true, true]))