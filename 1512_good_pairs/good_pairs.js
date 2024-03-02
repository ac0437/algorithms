// JS (Hashmap): https://leetcode.com/problems/number-of-good-pairs/submissions/1188124896/
// TS (Iteration/brute force): https://leetcode.com/problems/number-of-good-pairs/submissions/1177868936/
function numberOfGoodPairs(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = j + i; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                count++;
            }
        }
    }

    return count;
}

function numberOfGoodPairsHM(nums) {
    let count = 0;
    let pairs = {};

    for(let i = 0; i < nums.length; i++) {
        if(pairs[nums[i]] != undefined) {
            count += pairs[nums[i]];
            pairs[nums[i]]++;
        } else {
            pairs[nums[i]] = 1;
        }
    }

    return count;
}

console.log(`${"_".repeat(15)}`)
console.log("Hashmap")
console.log(`${"_".repeat(15)}`)
console.log(numberOfGoodPairsHM([1,2,3,1,1,3]))
console.log(numberOfGoodPairsHM([1,1,1,1]))
console.log(numberOfGoodPairsHM([1,2,3]))