function shuffleTheArray(nums) {
    let results = [];
    let offset = math.floor(nums.length / 2);

    for(let i = 0; i < nums.length; i++) {
        results.push(nums[i]);
        results.push(nums[offset + i]);
    }

    return results;
}

console.log(shuffleTheArray([2,5,1,3,4,7]))
console.log(shuffleTheArray([1,2,3,4,4,3,2,1]))
console.log(shuffleTheArray([1,1,2,2]))