function walk(steps) {
    if(steps === 1) return 1;

    walk(steps - 1);
    console.log(`You have take ${steps} steps.`)
}

walk(100)